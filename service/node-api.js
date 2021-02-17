const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const fs = require('fs')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/form', function (req, res) {

  const data = req.body;
  const version = data.beagleVersion;
  const linkVersion = data.linkVersion
  const plataform = data.beaglePlataform;
  const funcionalities = data.newFuncionalities ? data.newFuncionalities : '';
  const impacts = data.newImpacts ? data.newImpacts : '';
  const language = data.language;
  let newIcon = "";
  let link = "";
  let release = ""
  let newFuncionalities = ""
  let newImpacts = ""

  if (language === "PT") {
    if (linkVersion) {
      release = "<div>" +
        "<img src='https://docs.usebeagle.io/shared/Release.svg'>\n" +
        "<div class='beagle__version__text'>" + "<b><a target='_blank' class='beagle__version__text' href='" + linkVersion + "'>VERSÃO " + version + "</a></b>"
        + "</div>" +
        "</div>\n"
    }
    else {
      release = "<div>" +
        "<img src='https://docs.usebeagle.io/shared/Release.svg'>\n" + "<b><p class='beagle__version__text'>VERSÃO " + version + "</p></b>"
        + "</div>" +
        "</div>\n"
    }
  } else if (language === "EN") {
    if (linkVersion) {
      release = "<div>" +
        "<img src='https://docs.usebeagle.io/shared/Release.svg'>\n" +
        "<div class='beagle__version__text'>" + "<b><a target='_blank' class='beagle__version__text' href='" + linkVersion + "'>VERSION " + version + "</a></b>"
        + "</div>" +
        "</div>\n"
    }
    else {
      release = "<div>" +
        "<img src='https://docs.usebeagle.io/shared/Release.svg'>\n" + "<b><p class='beagle__version__text'>VERSION " + version + "</p></b>"
        + "</div>" +
        "</div>\n"
    }
  }

  if (Array.isArray(funcionalities)) {
    newFuncionalities = "<div>" +
      "<ul>" +
      funcionalities.map(function (item) {
        if (item.indexOf("<") != -1) {
          link = item.substring(item.indexOf("<") + 1).replace('>', '');
          return "<li class='content__list__item'><a target='_blank' class='content__list__link' href='" + link + "'> <img  class='content__list__icon' src='https://docs.usebeagle.io/shared/Icon.svg'/>" + item + "</a></li>\n"
        }
        else {
          return "<li class='content__list__item'><img   class='content__list__icon' src='https://docs.usebeagle.io/shared/Icon.svg'/>" + item + "</li>\n"
        }
      }).join('')
      + "</ul>" +
      "</div>\n"
  }
  else {
    if (funcionalities.indexOf("<") != -1) {
      link = funcionalities.substring(funcionalities.indexOf("<") + 1).replace('>', '');
      newFuncionalities = "<div>" +
        "<ul>" + "<li class='content__list__item'><a target='_blank' class='content__list__link' href='" + link + "'> <img  class='content__list__icon' src='https://docs.usebeagle.io/shared/Icon.svg'/>" + funcionalities + "</a></li>\n"
        + "</ul>" +
        "</div>\n"
    }
    else {
      newFuncionalities = "<div>" +
        "<ul>" + "<li class='content__list__item'><img   class='content__list__icon' src='https://docs.usebeagle.io/shared/Icon.svg'/>" + funcionalities + "</li>\n"
        + "</ul>" +
        "</div>\n"
    }
  }

  if (Array.isArray(impacts)) {
    newImpacts = "<div>" +
      "<ul>" +
      impacts.map(function (item) {
        if (item.indexOf("<") != -1) {
          link = item.substring(item.indexOf("<") + 1).replace('>', '');
          return " <li class='content__list__item'><a target='_blank' class='content__list__link' href='" + link + "'> <img  class='content__list__icon' src='https://docs.usebeagle.io/shared/Icon.svg'/>" + item + " </a></li>\n"
        }
        else {
          return " <li class='content__list__item'><img class='content__list__icon' src='https://docs.usebeagle.io/shared/Icon.svg'/>" + item + "</li>\n"
        }
      }).join('')
      + "</ul>" +
      "</div>"
  }
  else {
    if (impacts.indexOf("<") != -1) {
      link = impacts.substring(impacts.indexOf("<") + 1).replace('>', '');
      newImpacts = "<div>" +
        "<ul>" + "<li class='content__list__item'><a target='_blank' class='content__list__link' href='" + link + "'> <img  class='content__list__icon' src='https://docs.usebeagle.io/shared/Icon.svg'/>" + impacts + "</a></li>\n"
        + "</ul>" +
        "</div>\n"
    }
    else {
      newImpacts = "<div>" +
        "<ul>" + "<li class='content__list__item'><img   class='content__list__icon' src='https://docs.usebeagle.io/shared/Icon.svg'/>" + impacts + "</li>\n"
        + "</ul>" +
        "</div>\n"
    }
  }

  if (plataform === "IOS")
    newIcon = "<img  class='plataform__icon' src='https://docs.usebeagle.io/shared/IOS.svg'/>\n"

  else if (plataform === "ANDROID")
    newIcon = "<img  class='plataform__icon' src='https://docs.usebeagle.io/shared/Android.svg'/>\n"

  else if (plataform === "WEB")
    newIcon = "<img  class='plataform__icon' src='https://docs.usebeagle.io/shared/Web.svg'/>\n"

  else if (plataform === "IOS/ANDROID")
    newIcon = "<img  class='plataform__icon' src='https://docs.usebeagle.io/shared/IOS.svg'/><img  class='plataform__icon' src='https://docs.usebeagle.io/shared/Android.svg'/>\n"

  else if (plataform === "IOS/ANDROID/WEB")
    newIcon = "<img  class='plataform__icon' src='https://docs.usebeagle.io/shared/IOS.svg'/><img   class='plataform__icon' src='https://docs.usebeagle.io/shared/Android.svg'/> <img  class='plataform__icon' src='https://docs.usebeagle.io/shared/Web.svg'/>\n"

  const newplataform =
    plataform + newIcon + "</p>"


  if (language === "PT") {
    file = '../template/template-web.html';
  } else if (language === "EN") {
    file = '../template/template-web-English.html';
  }

  fs.readFile(file, function (err, data) {
    if (err) throw err; data = data.toString(); data = data.replace('<div id="Release"></div>', release), data = data.replace('<div id="Funcionalities"></div>', newFuncionalities), data = data.replace('<div id="Impacts"></div>', newImpacts), data = data.replace('<p id="Plataform">', newplataform)
    fs.writeFile('../complete/index.html', data, function (err) { err || console.log('Data replaced \n', data) })
  });
});

app.listen(3333, () => {
  console.log('server is running...')
});


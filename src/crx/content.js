// @flow
'use strict'
/**
 * @TODO Localize the UI languages
 *  1. chrome.i18n - Google Chrome https://developer.chrome.com/extensions/i18n
 *  2. ContextMenu
 */
const fs = require('fs')
const path = require('path')
const $ = require('jquery')
const ejs = require('ejs')
// const uuid = require('uuid/v4')
// const images = require('./image/base64')
const app = require('./app')

const createLanguageSwitcherElement = () => {
  return ejs.render(fs.readFileSync(path.resolve('src/crx/content-language-switcher.html.ejs'), 'utf-8'), {
    app: app
  })
}

// const createTranslationRequestElement = () => {
//   const title = $('.page-title').text()
//   const url = new URL(chrome.extension.getURL('form-translation-request.html'))
//   url.searchParams.set('uuid', uuid())
//   url.searchParams.set('title', encodeURIComponent(title))
//   url.searchParams.set('url', encodeURIComponent(window.location.href))
//   return ejs.render(fs.readFileSync(path.resolve('src/crx/content-translation-request.html.ejs'), 'utf-8'), {
//     app: app,
//     url: url.href
//   })
// }

const createTranslationContributorsElement = () => {
  return ejs.render(fs.readFileSync(path.resolve('src/crx/content-translation-contributors.html.ejs'), 'utf-8'), {
    app: app
  })
}

// const createSatisfactionElement = () => {
//   const title = $('.page-title').text()
//   const url = new URL(chrome.extension.getURL('form-satisfaction-feedback.html'))
//   url.searchParams.set('uuid', uuid())
//   url.searchParams.set('title', encodeURIComponent(title))
//   url.searchParams.set('url', encodeURIComponent(window.location.href))
//   const satisfaction = images['satisfaction'].map((value, index) => {
//     url.searchParams.set('score', 5 - index)
//     return {...{
//       href: url.href
//     },
//     ...value}
//   })
//   // console.log('satisfaction:', satisfaction)
//   return ejs.render(fs.readFileSync(path.resolve('src/crx/content-satisfaction-feedback.html.ejs'), 'utf-8'), {
//     app: app,
//     satisfaction: satisfaction
//   })
// }

/**
 * https://developer.chrome.com/extensions/content_scripts
 */
$(() => {
  $('.page-sidebars')
    // .prepend(createTranslationRequestElement())
    .prepend(createLanguageSwitcherElement())
    .append(createTranslationContributorsElement())
    // .append(createSatisfactionElement())
})

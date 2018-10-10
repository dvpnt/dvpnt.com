---
title: devpoint. Разработка. Поддержка. Консалтинг — dvpnt.com
draft: false
layout: layout.pug

projects:
  heading: Мы сделали
  items:
    - href: https://2do2go.ru
      image: 2do.svg
    - href: https://bel.cultreg.ru
      image: cultreg.svg
    - href: https://all.culture.ru
      image: eipsk.svg

openSource:
  intro: |
    <p>
      В наших проектах мы используем только решения и библиотеки с открытым исходным кодом.
      Помимо использования мы еще и делаем свои.
      Этот подход позволяет нам всегда быть в курсе самых последних технологий, использовать их и по возможности развивать.
    </p>
    <p>Вот некоторые из проектов, сделанных нами, и те, в которых мы принимали участие.</p>
  projects:
    - href: https://github.com/dvpnt/rpc-over-ipc
      title: rpc-over-ipc
      description: Lightweight RPC over IPC for node.js

    - href: https://github.com/dvpnt/passport-ok-strategy
      title: passport-ok-strategy
      description: Passport strategy for authenticating with odnoklassniki using the OAuth 2.0 API.

    - href: https://github.com/dvpnt/styled-media-helper
      title: styled-media-helper
      description: Module that makes easy to write media queries using styled-components.

    - href: https://github.com/node-ci
      title: nci
      description: Flexible, open source continuous integration server written in node.js

    - href: https://github.com/dvpnt/cron-group
      title: cron-group
      description: Manage a group of cron workers. Based on node-cron.

    - href: https://github.com/dvpnt/tree-kill-sync
      title: tree-kill-sync
      description: Synchronous version of tree-kill

header:
  title: Запускаем и поддерживаем
  subtitle: — стартапы, инфраструктуру

technologies:
  - title: Back-end
    description: |
      Используем <a href="https://javascript.org" target="__blank">javascript</a> и <a href="https://nodejs.org" target="__blank">node.js</a> для большинства наших проектов.
      Храним данныe в зависимости от задачи,
      чаще всего в <a href="https://www.mongodb.com" target="__blank">MongoDB</a> и <a href="https://www.postgresql.org" target="__blank">PostgreSql</a>. Покрываем тестами, используя <a href="https://github.com/tapjs/node-tap" target="__blank">node-tap</a>, считаем покрытие, используя <a href="https://github.com/istanbuljs/nyc" target="__blank">nyc</a>. Пишем документацию с использованием <a href="https://raml.org/" target="__blank">RAML.</a>

  - title: Front-end
    description: |
      <a href="https://reactjs.org" target="__blank">React</a> и <a href="https://redux.js.org" target="__blank">Redux </a>наши основные фреймворки. Мы любим css-in-js и используем <a href="https://www.styled-components.com" target="__blank">styled-components</a>. Собираем проекты с помощью <a href="https://webpack.js.org" target="__blank">webpack</a> и <a href="https://babeljs.io" target="__blank">babel</a>. Тестируем компоненты с помощью <a href="https://github.com/airbnb/enzyme" target="__blank">enzyme</a>, используя <a href="https://github.com/tapjs/node-tap" target="__blank">node-tap</a>. Пишем end-to-end тесты с помощью <a href="https://webdriver.io" target="__blank">webdriver.io</a> и запускаем в <a href="https://www.seleniumhq.org" target="__blank">Selenium</a>.

  - title: Infrastructure
    description: |
      Мы используем CI и CD для всех наших проектов.  Автоматизируем процесс выкатки с помощью <a href="https://www.ansible.com" target="__blank">ansible</a>.

feedback:
  text: У вас есть задача или вопрос? Давайте обсуждать.
  button: Написать
---

# Requirements + Technology

## Motivation
Komodo is rebuilding its website for 2018 - 2019. Our previous website is a bespoke React centered frontend, that has served us well but proved difficult to modify and update without constant developer involvement, resulting in slow updates. This update is therefore focussed on:

 - Creating a new solution with a fast TTL for new content
 - Updating our teams skillbase, utilising modern technology
 - Surfacing our internal practices with the public via open source.

## Requirements

Below is a list of project requirements determined for the site. These are in no particular order, and some of them are "achieve as close to" rather than being bang on.

 - IE11 support as much as possible
 - Desktop Chrome, Firefox, Safari should support current major version and last major version
 - Mobile Safari and Chrome shoudl support current major version
 - Older browsers should be shown a one-pager explaining they are using an old browser, but still marketing Komodo.
 - AA+ Accessibility support as defined by web accessibility standards group
 - 200ms time to interactive
 - Google Lighthouse score of 99
 - Sonarqube quality gate score of B
 - Jest tests for components with 80% coverage
 - Standards controlled using prettier and TSLint
 - Strong documentation inside the project
 - Integration tests - framework TBC
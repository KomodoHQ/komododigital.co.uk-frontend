# Pages Folder

This is where site pages will be created by Gatsby. 

The pages created here should actually be [Higher Order Components](https://reactjs.org/docs/higher-order-components.html) or components that simply feed data to templates (see templates folder).

This is necessary because of [Gatsby / Jest / GraphQL testing issues](https://github.com/gatsbyjs/gatsby/issues/5824). 

[The proposed solution](https://github.com/gatsbyjs/gatsby/issues/5824#issuecomment-409107419) explains the foundations for this approach.

**As a result pages are NOT testable** - instead test their templates with mocked data.

> **Note**: It is expected that each page will have a `template` that renders its props.


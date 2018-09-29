# Components

Components are small blocks of code that come together to make a page. They often render HTML using values that are passed in as props, but they don't have to. For example, a high-order component is a component that returns a new component when a component is passed to it.

# Components in the Komodo Website

Navigation Bar
Content Section
Quad Grid
Grid Item
Case Study Link
See More Button
Portfolio Item
Blog Post Link
Contact Section
vCard
Contact Form
Footer
Legal Footer
Services
Case Study Section
Metric
Testimonial

## Navigation Bar
The navigation bar at the top of every page.

### Child elements
Komodo Logo
Navigation Links
Hamburger (mobile only)

## Content Section
Content sections make up the bulk of all the pages. They contain centered text, and optional subtitle, title and image elements.

### Child elements
Subtitle
Title
Content
Image
Side by side Images

## QuadGrid (Approach)
The quad grid is a block of four items.

## Grid Item
A grid item component sits in the quadgrid.

### Child elements
Image
Title
Description

## Case Study
A link to a case study.

### Child elements
Image
Subtitle
Title
Description
Link

## See More Button
A button/anchor that links to more content in a section, or loads more in if it's in a scrolling list

## Portfolio/Standard Item
Portfolio items are an image in a small rectangle , maybe with a hover state that adds a description.

### Child elements
Image

## Blog Post
A link to a blog post.

### Child elements
Image
Subtitle
Title
Read Time
Link

## Contact Section
Contact forms are made up of two vCard's with contact details for key people, and a form that sends an email.

## vCard
A vCard contains the details of a key contact

### Child elements
Avatar
Name
Title
Email

## Contact Form
A contact form for sending an email. This should use validation, error states, etc.

### Child elements
Label
Input
Dropdown
Textarea
Submit

## Footer
The footer at the bottom of every page.

### Child elements
    Logo
    Address
    Sitemap
        Link

## Legal Footer
A second footer that sits under the main footer with legal links/contact phone number
### Child elements
    Copyright
    Privacy/Terms Links
    Get in touch/phone
    Social Sharing (mobile only?)

## Services
A component that lists all the services that Komodo offers.

### Child elements
Service Item

## Case Study Section
The initial block at the top of a case study. This needs an image that sits against the bottom without any padding.

### Child elements
    Color Section

## Metric
A case study metric box. Case studies have three of these in a row.

### Child elements
    Number
    Title
    Description

## Testimonial
A testimonial quote from a customer.

### Child elements
    Name
    Quote
    Division rule
    Job Title
    Company


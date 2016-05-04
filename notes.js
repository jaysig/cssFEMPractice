http://estelle.github.io/CSS-Workshop/#slide7

ul li - descendant selector matches nested li  (li's in a ul')

ol > li - child selector ignores nested uls  ()

li.myClass + li - adjacent sibling (matches the next occurance)

li.myClass ~ li - adjacent sibling (matches the following occurances)


ATTRIBUTE SELECTORS
img[alt]{} - select images with the alt attribute
form[type]{} - checks if form has type

E[attr="val"] - Element has attr with the exact, case-sensitive if attribute, value val
E[attr|val] - Element who attribute attr has a value val or begins with val
  p[lang|="en"]

E[attr~=val] - E whose attribute attr has within its value the space-separated full word val a[title~=more]

E[attr^=val] - Element E whose attribute attr starts with the value val
   a[href^=mailto] {background-image: url(emailcon.gif);}

E[attr$=val] - Element E whose attribute attr ends in val
  a[href$=pdf] {background-image: url(pdficon.gif);}

E[attr*=val] - Element E whose attribute matches val anywhere within the attribute, val can be part of a word

Pseudo CLASSES
:valid :in-range
:invalid :out-of-range
:required :read-only
:optional :read-write :default

Structural selectors
:nth-child() :nth-last-child()
:nth-of-type() :last-of-type
:only-child :only-of-type
:first-child :last-child

p:first-of-type - selects the first paragraph
aN + b
:nth-child(3n) - every 3rd one
nth-last-of-type(3n+1) - third minus - 1

NEGATION Pseudo-Class
div:not([title])
div:not(#id)

action pseudo-classes
:hover
:active
:focus

* declare root size
p:first-of-type:first-letter

UNDERSTANDING SPECIFICITY
// https://frontendmasters.com/assets/outlines/11-weyl-css_in_depth.pdf
// https://frontendmasters.com/assets/resources/estelleweyl/slides/part_02_specificity.html#slide4

GENERATED CONTENT
* You get access to before and after with each element
// http://copypastecharacter.com
* Counters can be used things beyond lists

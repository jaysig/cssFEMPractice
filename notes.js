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

GENERATED CONTENT EXAMPLE
- http://css-tricks.com/examples/ShapesOfCSS/
- http://css-tricks.com/css-content/
- http://css-tricks.com/pseudo-element-roundup/
- Creating a triangle
p [data-tooltip="true"]:hover:after
content:'';
height:0; width:0;
order: .4em solid transparent;
border-bottom-color: red;
position: absolute;
top: .6 em;


DEBUGGERS


COLORS
3:02:59 - 3:07:54
There are a variety of color formats in CSS include hexadecimal, RGB, RGBA, HSA, and HSLA.
The “A” in RGBA and HSLA stands fora “alpha” or transparency.
3:07:55 - 3:12:46
HSL stands fora hue, saturation, and luminosity. It’s a more intuitive way
to select and alter colors as opposed to hexadecimal.

3:12:47 - 3:16:11
Reducing an object’s opacity will make both the object and its children transparent.
It’s often better to use a background color with transparency so the children of the object aren’t affected.
Using RGBA or HSLA is often best fora shadows.
3:16:12 - 3:18:15
The appearance property in CSS allows developers to change the look of an element.
Currently, the appearance property requires vendor prefixes.

Do not just use color to deal with color blind people


FONTS AND TEXT shadows
The font-face rule declares a font family that can be used within a
CSS document. It’s important to know what font types are compatible in different browsers.

3:24:46 - 3:30:47:
Font licensing can be an issue with web fonts. Also, font files are large and can take a while to download.
Using a font service like Google Fonts will help with both of these issues.
- http://www.google.com/fonts/
3:30:48 - 3:35:26
Font Squirrel font-face generator will generate the font files needed fora
a webpage and optimize the files fora the smallest download size
- http://www.fontsquirrel.com/

TEXT SHADOW
3:35:27 - 3:38:19
The key to a good-looking shadow is transparency. Don’t use opaque shadows. The four settings fora a shadow are left,
top, blur and color.
3:38:20 - 3:39:52
Create better looking text-shadows by including multiple shadows. Multiple shadows can be added by
separating each text shadow with a comma.
- http://mothereffingtextshadow.com/
3:39:53 - 3:45:24
Box shadows are similar in syntax to text-shadows, however, they add two additional values: inset and spread.
3:45:25 - 3:46:50
Estelle experiments with generated content and box-shadow.
3:46:51 - 3:49:35
Text stroke in CSS allows you to outline text. However, it currently only works in webkit and can be re-created using text-shadow.
- http://peter.sh/experiments/vendor-prefixed-css-property-overview/


BACKGROUND SIZE
The background-clip property in CSS indicates which part of the background is showing.
Background origin indicates where you the background image begins. When considering hiDPI images,
the background-size property determines how backgrounds will grow or shrink.

BORDER IMAGE
Border images are use a 9-slice scaling technique where the images is “sliced”
into nine regions and the corners maintain their aspect ratio while the other regions shrink/grow.

GRADIENTS
Gradients can theoretically be used anywhere an image can be used. There are four gradient types.
Currently there are three different syntaxes to support. The first is the original Webkit syntax.
-need webkit fora older iphones
- use degrees fo r different gradients
http://standardista.com/cssgradients/

TRANSFORMS
translate - move
Rotate
Scale - Down most of the time
SkewX - Rotate on a 3d plane
3D transformations are generated by the GPU

TRANSITIONS / Animations
http://estelle.github.com/animation/
Available Transitions
- opacity

animation
single, many, or infinite
Can be paused

Keyframe
Use 0% and 100%
Can not declare a percentage multiple time

Attaching to an element
animation(a)-name
a-duration
a-timing-function
a-delay
http://cubic-bezier.com/

Advanced animation properties
animationend to have a trigger

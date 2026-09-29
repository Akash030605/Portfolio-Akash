// High-precision 3D-shaded editorial SVG assets for the LEGO Akash hero character
// and technical engineering visuals. Supports replaceable /assets/akash-hero.png
// and /assets/akash-hero-reveal.png while guaranteeing zero broken images.

export function createLegoAkashSvg(isReveal: boolean): string {
  const rimCyan = isReveal ? '#75C5DE' : '#9AD6E8';
  const auraOpacity = isReveal ? '0.88' : '0.58';
  const rimStrokeOpacity = isReveal ? '0.95' : '0.25';
  const watchGlow = isReveal ? '#75C5DE' : '#FFFFFF';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" width="900" height="1200" fill="none">
  <defs>
    <!-- Radial Cyan Studio Aura behind the character -->
    <radialGradient id="cyanAura" cx="50%" cy="38%" r="42%" fx="50%" fy="36%">
      <stop offset="0%" stop-color="#75C5DE" stop-opacity="${auraOpacity}" />
      <stop offset="45%" stop-color="#75C5DE" stop-opacity="${isReveal ? '0.48' : '0.26'}" />
      <stop offset="78%" stop-color="#75C5DE" stop-opacity="${isReveal ? '0.14' : '0.05'}" />
      <stop offset="100%" stop-color="#75C5DE" stop-opacity="0" />
    </radialGradient>

    <!-- Floor contact shadow -->
    <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#111111" stop-opacity="0.42" />
      <stop offset="55%" stop-color="#111111" stop-opacity="0.16" />
      <stop offset="100%" stop-color="#111111" stop-opacity="0" />
    </radialGradient>

    <!-- 3D Yellow LEGO Head & Skin Shading -->
    <linearGradient id="legoYellowHead" x1="15%" y1="15%" x2="88%" y2="85%">
      <stop offset="0%" stop-color="${isReveal ? '#FFE066' : '#F9C846'}" />
      <stop offset="38%" stop-color="#F2B325" />
      <stop offset="76%" stop-color="#D99412" />
      <stop offset="100%" stop-color="${isReveal ? '#59A5BF' : '#B57609'}" />
    </linearGradient>

    <linearGradient id="legoYellowHand" x1="10%" y1="10%" x2="90%" y2="90%">
      <stop offset="0%" stop-color="#FAD056" />
      <stop offset="50%" stop-color="#EDA91C" />
      <stop offset="100%" stop-color="#C4820B" />
    </linearGradient>

    <!-- Sculpted Wavy Dark Hair Shading -->
    <linearGradient id="hairBase" x1="20%" y1="0%" x2="85%" y2="100%">
      <stop offset="0%" stop-color="${isReveal ? '#2D3740' : '#262626'}" />
      <stop offset="45%" stop-color="#151515" />
      <stop offset="100%" stop-color="#0A0A0A" />
    </linearGradient>

    <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="${isReveal ? '#75C5DE' : '#525252'}" stop-opacity="${isReveal ? '0.85' : '0.55'}" />
      <stop offset="50%" stop-color="#383838" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#111111" stop-opacity="0" />
    </linearGradient>

    <!-- Sunglasses Lens Gradient -->
    <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${isReveal ? '#2D5F72' : '#2A2A2A'}" />
      <stop offset="35%" stop-color="#111111" />
      <stop offset="100%" stop-color="#050505" />
    </linearGradient>

    <!-- Light Gray Pinstriped Shirt 3D Shading -->
    <linearGradient id="shirtBody" x1="8%" y1="10%" x2="92%" y2="85%">
      <stop offset="0%" stop-color="#EFEFEF" />
      <stop offset="28%" stop-color="#DCDCDC" />
      <stop offset="72%" stop-color="#C2C2C2" />
      <stop offset="100%" stop-color="${isReveal ? '#8AC5D8' : '#9E9E9E'}" />
    </linearGradient>

    <linearGradient id="shirtSleeveLeft" x1="0%" y1="20%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#EAEAEA" />
      <stop offset="60%" stop-color="#CFCFCF" />
      <stop offset="100%" stop-color="#A6A6A6" />
    </linearGradient>

    <linearGradient id="shirtSleeveRight" x1="10%" y1="15%" x2="95%" y2="85%">
      <stop offset="0%" stop-color="#DDDDDD" />
      <stop offset="55%" stop-color="#BFBFBF" />
      <stop offset="100%" stop-color="${isReveal ? '#6CB8D1' : '#969696'}" />
    </linearGradient>

    <!-- Pinstripe Pattern -->
    <pattern id="pinstripes" width="18" height="40" patternUnits="userSpaceOnUse">
      <line x1="6" y1="0" x2="6" y2="40" stroke="#9A9A9A" stroke-width="1.2" stroke-opacity="0.42" />
      <line x1="14" y1="0" x2="14" y2="40" stroke="#B0B0B0" stroke-width="0.8" stroke-opacity="0.3" />
    </pattern>

    <!-- Beard Stubble Pattern -->
    <pattern id="stubblePattern" width="6" height="6" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="0.95" fill="#23180B" fill-opacity="0.78" />
      <circle cx="4.5" cy="3.8" r="0.85" fill="#1E1409" fill-opacity="0.72" />
      <circle cx="2.2" cy="5.1" r="0.75" fill="#2A1D0E" fill-opacity="0.65" />
    </pattern>

    <!-- Dark Denim Jeans 3D Shading -->
    <linearGradient id="denimLeftLeg" x1="0%" y1="0%" x2="100%" y2="90%">
      <stop offset="0%" stop-color="${isReveal ? '#35546C' : '#2B3B4B'}" />
      <stop offset="40%" stop-color="#1D2935" />
      <stop offset="85%" stop-color="#121A22" />
      <stop offset="100%" stop-color="#0B1016" />
    </linearGradient>

    <linearGradient id="denimRightLeg" x1="0%" y1="0%" x2="100%" y2="90%">
      <stop offset="0%" stop-color="#263645" />
      <stop offset="50%" stop-color="#17222D" />
      <stop offset="90%" stop-color="#0E151D" />
      <stop offset="100%" stop-color="${isReveal ? '#5CAEC9' : '#1E2D3B'}" />
    </linearGradient>

    <!-- Crossbody Leather Bag & Strap -->
    <linearGradient id="leatherStrap" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2B2B2B" />
      <stop offset="50%" stop-color="#171717" />
      <stop offset="100%" stop-color="#0B0B0B" />
    </linearGradient>

    <filter id="softDropShadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#111111" flood-opacity="0.24" />
    </filter>

    <filter id="cyanRimGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="${isReveal ? '14' : '6'}" flood-color="#75C5DE" flood-opacity="${isReveal ? '0.65' : '0.2'}" />
    </filter>
  </defs>

  <!-- Soft Cyan Halo Behind Character -->
  <ellipse cx="455" cy="495" rx="335" ry="370" fill="url(#cyanAura)" />

  ${
    isReveal
      ? `<!-- Subtle Technical Editorial Grid Ring in Spotlight Reveal Mode -->
  <g opacity="0.38" stroke="#75C5DE" stroke-width="1">
    <circle cx="455" cy="450" r="290" stroke-dasharray="4 8" />
    <circle cx="455" cy="450" r="340" stroke-opacity="0.4" />
    <line x1="115" y1="450" x2="795" y2="450" stroke-opacity="0.25" />
    <line x1="455" y1="110" x2="455" y2="790" stroke-opacity="0.25" />
  </g>`
      : ''
  }

  <!-- Ground Contact Shadow & Floor Reflection -->
  <ellipse cx="465" cy="1118" rx="235" ry="28" fill="url(#floorShadow)" />
  <ellipse cx="372" cy="1122" rx="92" ry="14" fill="#111111" fill-opacity="0.28" />
  <ellipse cx="562" cy="1128" rx="98" ry="15" fill="#111111" fill-opacity="0.32" />

  <!-- Subtle Floor Reflection of Shoes -->
  <g opacity="0.14">
    <rect x="292" y="1122" width="148" height="45" rx="8" fill="#17222D" />
    <rect x="482" y="1128" width="156" height="45" rx="8" fill="#121A22" />
  </g>

  <!-- ===================================================== -->
  <!-- MAIN LEGO AKASH CHARACTER GROUP                       -->
  <!-- ===================================================== -->
  <g filter="url(#softDropShadow)">

    <!-- 1. SIDE MESSENGER BAG (Resting behind/at left hip) -->
    <g id="side-messenger-bag">
      <path d="M254 695 C235 700, 224 736, 228 785 C231 825, 244 858, 266 864 L318 868 L328 702 Z" fill="url(#leatherStrap)" stroke="#2F2F2F" stroke-width="2" />
      <!-- Bag Flap & Seam Highlight -->
      <path d="M248 702 C236 718, 234 756, 240 792 L292 798 L305 708 Z" fill="#1F1F1F" stroke="#3A3A3A" stroke-width="1.5" />
      <path d="M235 770 Q262 805 292 795" stroke="#484848" stroke-width="2" fill="none" />
    </g>

    <!-- 2. DARK DENIM JEANS (Pelvis & Legs) -->
    <g id="lego-jeans">
      <!-- Pelvis / Hip Block -->
      <path d="M316 765 L622 772 L630 836 L308 830 Z" fill="#1A2633" stroke="#0F171F" stroke-width="2" />
      <!-- Center Seam -->
      <line x1="466" y1="770" x2="464" y2="836" stroke="#0B1117" stroke-width="4" />

      <!-- Viewer's Left Leg (Character's Right Leg) -->
      <path d="M308 825 L458 830 L446 1055 L294 1050 Z" fill="url(#denimLeftLeg)" stroke="${rimCyan}" stroke-opacity="${rimStrokeOpacity}" stroke-width="1.5" />
      <!-- Left Leg Pocket Stitching -->
      <path d="M316 836 Q356 868 386 832" stroke="#4F667D" stroke-width="2" stroke-dasharray="4 3" fill="none" />
      <!-- Left Foot / Shoe Block -->
      <rect x="286" y="1046" width="160" height="72" rx="10" fill="url(#denimLeftLeg)" stroke="#2A3B4C" stroke-width="2" />
      <line x1="288" y1="1062" x2="444" y2="1064" stroke="#3C5266" stroke-width="1.5" stroke-opacity="0.6" />
      <!-- Specular Highlight on Left Foot -->
      <rect x="296" y="1054" width="65" height="8" rx="4" fill="#FFFFFF" fill-opacity="0.12" />

      <!-- Viewer's Right Leg (Character's Left Leg) -->
      <path d="M472 830 L630 832 L652 1062 L482 1058 Z" fill="url(#denimRightLeg)" stroke="${rimCyan}" stroke-opacity="${rimStrokeOpacity}" stroke-width="2" />
      <!-- Right Leg Pocket Stitching -->
      <path d="M558 834 Q590 868 626 840" stroke="#4F667D" stroke-width="2" stroke-dasharray="4 3" fill="none" />
      <!-- Right Leg Outer Edge Specular Highlight -->
      <line x1="622" y1="838" x2="644" y2="1056" stroke="${isReveal ? '#75C5DE' : '#637D96'}" stroke-width="3" stroke-opacity="${isReveal ? '0.8' : '0.4'}" />
      <!-- Right Foot / Shoe Block -->
      <rect x="478" y="1054" width="174" height="74" rx="10" fill="url(#denimRightLeg)" stroke="${isReveal ? '#75C5DE' : '#2A3B4C'}" stroke-width="2" />
      <line x1="480" y1="1070" x2="650" y2="1072" stroke="#3C5266" stroke-width="1.5" stroke-opacity="0.6" />
      <rect x="492" y="1062" width="75" height="8" rx="4" fill="#FFFFFF" fill-opacity="0.12" />
    </g>

    <!-- 3. NECK POST (Warm Yellow LEGO Neck) -->
    <g id="lego-neck">
      <path d="M402 418 L528 418 L534 495 L396 495 Z" fill="url(#legoYellowHead)" />
      <!-- Neck Collar Shadow -->
      <ellipse cx="465" cy="430" rx="64" ry="14" fill="#8C5805" fill-opacity="0.35" />
    </g>

    <!-- 4. TORSO — LIGHT GRAY PINSTRIPED BUTTON-UP SHIRT -->
    <g id="lego-shirt-torso">
      <!-- Main Trapezoid Torso -->
      <path d="M324 462 C328 446, 355 440, 392 440 L465 512 L538 440 C575 440, 602 446, 608 462 L636 775 C636 785, 624 792, 606 792 L322 786 C306 784, 298 775, 300 762 Z" fill="url(#shirtBody)" stroke="#2A2A2A" stroke-width="2.2" />
      <!-- Pinstripe Overlay on Torso -->
      <path d="M324 462 C328 446, 355 440, 392 440 L465 512 L538 440 C575 440, 602 446, 608 462 L636 775 C636 785, 624 792, 606 792 L322 786 C306 784, 298 775, 300 762 Z" fill="url(#pinstripes)" />

      <!-- Realistic Cloth Creases / Wrinkles -->
      <path d="M335 675 Q395 660 440 682" stroke="#A0A0A0" stroke-width="3" fill="none" opacity="0.55" />
      <path d="M325 725 Q405 705 465 728" stroke="#969696" stroke-width="3.5" fill="none" opacity="0.5" />
      <path d="M495 695 Q555 678 608 702" stroke="#A0A0A0" stroke-width="3" fill="none" opacity="0.55" />
      <path d="M485 742 Q550 732 618 752" stroke="#909090" stroke-width="3" fill="none" opacity="0.5" />

      <!-- Shirt Collar (Open V-neck with Lapels) -->
      <path d="M386 436 L346 472 L404 494 L452 518 L412 456 Z" fill="#EAEAEA" stroke="#222222" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M544 436 L584 472 L526 494 L472 518 L518 456 Z" fill="#E2E2E2" stroke="#222222" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Center Button Placket & Buttons -->
      <line x1="468" y1="514" x2="458" y2="788" stroke="#222222" stroke-width="2.5" />
      <line x1="484" y1="514" x2="474" y2="788" stroke="#888888" stroke-width="1.2" />
      <!-- Buttons -->
      <circle cx="450" cy="498" r="5.5" fill="#1F1F1F" stroke="#555555" stroke-width="1.2" />
      <circle cx="476" cy="542" r="5.5" fill="#1F1F1F" stroke="#555555" stroke-width="1.2" />
      <circle cx="472" cy="606" r="5.5" fill="#1F1F1F" stroke="#555555" stroke-width="1.2" />
      <circle cx="468" cy="672" r="5.5" fill="#1F1F1F" stroke="#555555" stroke-width="1.2" />
      <circle cx="465" cy="738" r="5.5" fill="#1F1F1F" stroke="#555555" stroke-width="1.2" />

      <!-- Left Chest Pocket (Viewer's Left) -->
      <g id="chest-pocket-left">
        <rect x="352" y="532" width="84" height="82" rx="6" fill="#D8D8D8" fill-opacity="0.65" stroke="#333333" stroke-width="1.8" />
        <path d="M350 532 L438 532 L438 556 L394 566 L350 556 Z" fill="#E4E4E4" stroke="#222222" stroke-width="2" />
        <circle cx="394" cy="552" r="4" fill="#2B2B2B" />
      </g>

      <!-- Right Chest Pocket (Viewer's Right) -->
      <g id="chest-pocket-right">
        <rect x="506" y="534" width="86" height="84" rx="6" fill="#D0D0D0" fill-opacity="0.65" stroke="#333333" stroke-width="1.8" />
        <path d="M504 534 L594 534 L594 558 L549 568 L504 558 Z" fill="#DDDDDD" stroke="#222222" stroke-width="2" />
        <circle cx="549" cy="554" r="4" fill="#2B2B2B" />
      </g>
    </g>

    <!-- 5. VIEWER'S RIGHT ARM (Character's Left Arm) + BLACK WRISTWATCH -->
    <g id="character-left-arm">
      <!-- Rolled-Up Shirt Sleeve -->
      <path d="M604 458 C638 468, 668 515, 682 585 L694 648 L618 654 L602 545 Z" fill="url(#shirtSleeveRight)" stroke="#2A2A2A" stroke-width="2" />
      <path d="M604 458 C638 468, 668 515, 682 585 L694 648 L618 654 L602 545 Z" fill="url(#pinstripes)" />
      <!-- Rolled Cuff Fold -->
      <path d="M612 630 C642 622, 678 625, 702 640 L698 672 C672 662, 638 660, 614 666 Z" fill="#D5D5D5" stroke="#2A2A2A" stroke-width="2" />
      <path d="M616 646 Q658 638 696 654" stroke="#7A7A7A" stroke-width="2" fill="none" />

      <!-- Yellow Forearm -->
      <path d="M622 664 L688 662 L684 736 L620 732 Z" fill="url(#legoYellowHand)" />

      <!-- Black Analog Wristwatch on Left Wrist -->
      <g id="wristwatch">
        <!-- Watch Strap -->
        <rect x="615" y="692" width="76" height="32" rx="6" fill="#181818" stroke="#383838" stroke-width="1.8" />
        <rect x="622" y="698" width="16" height="20" rx="2" fill="#2C2C2C" />
        <!-- Watch Case & Bezel -->
        <circle cx="662" cy="708" r="24" fill="#141414" stroke="${watchGlow}" stroke-width="2.2" />
        <circle cx="662" cy="708" r="19" fill="#0B0B0B" stroke="#D8D8D8" stroke-width="1.5" />
        <!-- Watch Dial Ticks & Hands -->
        <line x1="662" y1="691" x2="662" y2="695" stroke="#FFFFFF" stroke-width="2" />
        <line x1="662" y1="721" x2="662" y2="725" stroke="#FFFFFF" stroke-width="2" />
        <line x1="645" y1="708" x2="649" y2="708" stroke="#FFFFFF" stroke-width="2" />
        <line x1="675" y1="708" x2="679" y2="708" stroke="#FFFFFF" stroke-width="2" />
        <line x1="662" y1="708" x2="653" y2="700" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" />
        <line x1="662" y1="708" x2="672" y2="713" stroke="${watchGlow}" stroke-width="1.8" stroke-linecap="round" />
        <circle cx="662" cy="708" r="2.2" fill="#75C5DE" />
      </g>

      <!-- Yellow C-Shaped LEGO Hand (Viewer's Right) -->
      <path d="M626 732 C602 742, 594 776, 612 798 C626 814, 656 818, 678 802 C696 788, 698 755, 680 734 Z" fill="url(#legoYellowHand)" stroke="#B07208" stroke-width="1.5" />
      <!-- Inner C-Grip Cutout -->
      <path d="M634 756 C622 764, 622 784, 636 792 C650 798, 664 788, 664 772 C664 758, 648 750, 634 756 Z" fill="#9E6506" />
    </g>

    <!-- 6. BLACK CROSSBODY MESSENGER STRAP (Diagonal across chest) -->
    <g id="crossbody-strap">
      <path d="M562 448 L602 458 L322 802 L278 788 Z" fill="url(#leatherStrap)" stroke="#333333" stroke-width="1.8" />
      <!-- Subtle Edge Highlight on Leather Strap -->
      <line x1="564" y1="450" x2="282" y2="786" stroke="${isReveal ? '#75C5DE' : '#555555'}" stroke-width="1.5" stroke-opacity="0.65" />
    </g>

    <!-- 7. VIEWER'S LEFT ARM (Character's Right Arm, Bent Holding Strap) + BRACELET -->
    <g id="character-right-arm">
      <!-- Upper Rolled Sleeve -->
      <path d="M326 458 C292 470, 260 520, 245 588 L238 636 L316 654 L328 540 Z" fill="url(#shirtSleeveLeft)" stroke="#2A2A2A" stroke-width="2" />
      <path d="M326 458 C292 470, 260 520, 245 588 L238 636 L316 654 L328 540 Z" fill="url(#pinstripes)" />
      <!-- Sculpted Rolled Sleeve Cuff -->
      <path d="M234 616 C252 592, 298 594, 326 618 L318 666 C286 654, 248 652, 230 644 Z" fill="#E0E0E0" stroke="#2A2A2A" stroke-width="2.2" />
      <path d="M242 632 Q278 614 316 636" stroke="#888888" stroke-width="2" fill="none" />

      <!-- Bent Yellow Forearm Reaching to Strap -->
      <path d="M266 618 C288 610, 345 612, 378 622 L370 676 C332 674, 282 668, 258 652 Z" fill="url(#legoYellowHand)" stroke="#B57609" stroke-width="1.5" />

      <!-- Black Beaded Bracelet on Right Wrist -->
      <g id="beaded-bracelet">
        <path d="M362 612 C376 612, 382 642, 378 668 C374 684, 360 688, 352 682 C358 656, 358 628, 362 612 Z" fill="#161616" stroke="#3A3A3A" stroke-width="1.5" />
        <circle cx="368" cy="622" r="3" fill="#888888" />
        <circle cx="371" cy="636" r="3" fill="#75C5DE" fill-opacity="${isReveal ? '0.95' : '0.45'}" />
        <circle cx="371" cy="650" r="3" fill="#888888" />
        <circle cx="368" cy="664" r="3" fill="#888888" />
      </g>

      <!-- Yellow LEGO Right Hand Gripping the Crossbody Strap -->
      <path d="M372 608 C405 596, 444 612, 452 642 C458 668, 436 692, 402 690 C376 688, 364 668, 366 642 Z" fill="url(#legoYellowHand)" stroke="#B57609" stroke-width="1.8" />
      <!-- Sculpted LEGO Claw Fingers Wrapping Strap -->
      <path d="M406 610 C428 612, 448 626, 448 644 C448 658, 432 666, 414 662" stroke="#9C6306" stroke-width="4" stroke-linecap="round" fill="none" />
      <path d="M398 634 C422 636, 442 648, 440 666" stroke="#9C6306" stroke-width="4" stroke-linecap="round" fill="none" />
    </g>

    <!-- 8. LEGO HEAD (Yellow Cylindrical Head, Ear, Stubble Beard, Sunglasses, Smirk) -->
    <g id="lego-head" filter="url(#cyanRimGlow)">
      <!-- Main Yellow LEGO Head Cylinder -->
      <rect x="358" y="252" width="214" height="184" rx="46" fill="url(#legoYellowHead)" stroke="${rimCyan}" stroke-opacity="${rimStrokeOpacity}" stroke-width="2" />

      <!-- Sculpted LEGO Ear on Viewer's Right -->
      <path d="M564 326 C588 324, 598 344, 594 368 C590 388, 576 398, 560 392 Z" fill="url(#legoYellowHead)" stroke="#B57609" stroke-width="1.8" />
      <path d="M570 340 C582 342, 584 360, 576 374" stroke="#9E6506" stroke-width="3" stroke-linecap="round" fill="none" />

      <!-- Nose / Brow Sculpted Relief -->
      <path d="M388 328 C374 344, 376 365, 394 370" fill="#F6C33E" stroke="#BA7B0A" stroke-width="2.2" stroke-linecap="round" />

      <!-- Stippled Stubble Beard & Mustache along Jawline and Chin -->
      <path d="M362 375 C368 368, 396 366, 425 374 C432 384, 425 398, 405 402 C432 406, 474 402, 496 376 C512 354, 520 326, 535 322 L542 365 C536 404, 512 428, 462 432 C402 435, 364 418, 362 375 Z" fill="url(#stubblePattern)" />
      <!-- Subtle Beard Shadow Tone -->
      <path d="M362 375 C368 368, 396 366, 425 374 C432 384, 425 398, 405 402 C432 406, 474 402, 496 376 C512 354, 520 326, 535 322 L542 365 C536 404, 512 428, 462 432 C402 435, 364 418, 362 375 Z" fill="#2A1B0A" fill-opacity="0.22" />

      <!-- Confident Smirk Mouth & Mustache Line -->
      <path d="M372 374 Q396 368 422 378" stroke="#1E1409" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M376 385 Q398 394 420 383" stroke="#181006" stroke-width="4" stroke-linecap="round" fill="none" />
      <path d="M384 396 Q396 401 408 396" stroke="#231709" stroke-width="2.5" stroke-linecap="round" fill="none" />

      <!-- Eyebrows Above Sunglasses -->
      <path d="M368 298 Q386 290 404 298" stroke="#141414" stroke-width="6" stroke-linecap="round" fill="none" />
      <path d="M426 296 Q452 286 482 296" stroke="#141414" stroke-width="6.5" stroke-linecap="round" fill="none" />

      <!-- Dark Wayfarer Sunglasses -->
      <g id="sunglasses">
        <!-- Temple Arm Going to Ear -->
        <path d="M490 318 L572 328 L572 338 L488 330 Z" fill="#141414" stroke="${isReveal ? '#75C5DE' : '#3A3A3A'}" stroke-width="1.2" />
        <!-- Left Frame & Lens (Viewer's Left) -->
        <path d="M342 308 C354 304, 384 304, 396 310 C402 324, 398 354, 384 362 C366 368, 348 358, 344 338 Z" fill="url(#lensGrad)" stroke="#141414" stroke-width="7" stroke-linejoin="round" />
        <!-- Bridge -->
        <path d="M394 314 Q408 310 420 314" stroke="#141414" stroke-width="7" stroke-linecap="round" fill="none" />
        <!-- Right Frame & Lens (Viewer's Right) -->
        <path d="M418 310 C435 304, 476 304, 490 312 C496 330, 490 360, 470 366 C446 372, 422 360, 418 336 Z" fill="url(#lensGrad)" stroke="#141414" stroke-width="7.5" stroke-linejoin="round" />

        <!-- Studio Specular Reflections on Lenses -->
        <path d="M352 316 L366 314 L356 348 L348 344 Z" fill="${isReveal ? '#75C5DE' : '#FFFFFF'}" fill-opacity="${isReveal ? '0.45' : '0.22'}" />
        <path d="M430 316 L448 314 L436 354 L424 350 Z" fill="${isReveal ? '#75C5DE' : '#FFFFFF'}" fill-opacity="${isReveal ? '0.5' : '0.24'}" />
        <path d="M456 315 L464 315 L452 354 L446 352 Z" fill="#FFFFFF" fill-opacity="0.14" />
      </g>
    </g>

    <!-- 9. VOLUMINOUS SCULPTED WAVY BLACK LEGO HAIR -->
    <g id="lego-wavy-hair">
      <!-- Main Sculpted Hair Mass -->
      <path d="M352 292 C334 275, 332 238, 352 216 C358 192, 388 175, 422 176 C446 162, 492 162, 524 176 C562 178, 594 198, 602 228 C628 246, 634 282, 616 314 C624 342, 612 378, 590 398 C584 415, 570 426, 558 424 L558 386 C576 375, 582 342, 566 326 L516 324 L512 294 C478 302, 432 304, 392 292 C374 296, 360 296, 352 292 Z" fill="url(#hairBase)" stroke="${isReveal ? '#75C5DE' : '#2A2A2A'}" stroke-opacity="${isReveal ? '0.75' : '0.5'}" stroke-width="2" />

      <!-- Sculpted 3D Wavy Hair Locks & Highlight Ridges -->
      <path d="M356 246 C378 224, 424 226, 456 248 C485 268, 532 262, 566 238" stroke="url(#hairHighlight)" stroke-width="14" stroke-linecap="round" fill="none" />
      <path d="M376 206 C412 188, 464 192, 504 214 C538 232, 574 224, 596 208" stroke="url(#hairHighlight)" stroke-width="12" stroke-linecap="round" fill="none" />
      <path d="M346 274 C374 258, 415 262, 445 282 C474 298, 515 292, 545 272" stroke="#2F2F2F" stroke-width="10" stroke-linecap="round" fill="none" />
      <path d="M542 258 C576 262, 606 286, 608 318" stroke="url(#hairHighlight)" stroke-width="10" stroke-linecap="round" fill="none" />
      <path d="M558 302 C584 316, 598 348, 588 382" stroke="#2C2C2C" stroke-width="9" stroke-linecap="round" fill="none" />

      <!-- Deep Hair Crevice Lines for 3D Molded Plastic Realism -->
      <path d="M362 232 Q410 212 454 236" stroke="#080808" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <path d="M438 198 Q488 182 538 208" stroke="#080808" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <path d="M354 262 Q398 248 438 272" stroke="#080808" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <path d="M462 264 Q512 254 558 278" stroke="#080808" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <path d="M554 234 Q592 248 612 284" stroke="#080808" stroke-width="4.5" stroke-linecap="round" fill="none" />
    </g>

  </g>
</svg>`;
}

export const LEGO_AKASH_BASE_SVG = createLegoAkashSvg(false);
export const LEGO_AKASH_REVEAL_SVG = createLegoAkashSvg(true);

export const LEGO_AKASH_BASE_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(LEGO_AKASH_BASE_SVG)}`;
export const LEGO_AKASH_REVEAL_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(LEGO_AKASH_REVEAL_SVG)}`;

// High-resolution generated project UI screenshots
export const GENERATED_PROJECT_IMAGES = {
  followupMain: '/src/assets/images/project_followup_ui_1790674808440.jpg',
  ashaBoutiqueMain: '/src/assets/images/project_asha_boutique_ui_1790674822341.jpg',
  beyondMeMain: '/src/assets/images/project_beyondme_ui_1790674832303.jpg',
};

// Custom SVG technical system architecture & interface cards for stacked project shots and marquee reel
function createTechnicalSvgDataUri(config: {
  tag: string;
  title: string;
  subtitle: string;
  metrics: string[];
  codeLines: string[];
  accent?: string;
  theme?: 'dark' | 'cream';
}): string {
  const isCream = config.theme === 'cream';
  const bg = isCream ? '#F4F1E8' : '#141414';
  const cardBg = isCream ? '#EAE6DA' : '#1B1B1B';
  const border = isCream ? 'rgba(17,17,17,0.14)' : 'rgba(215,226,234,0.18)';
  const fg = isCream ? '#111111' : '#F4F1E8';
  const muted = isCream ? '#6E6A64' : '#9A9590';
  const accent = config.accent || '#75C5DE';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 540" width="840" height="540" fill="none">
    <rect width="840" height="540" rx="24" fill="${bg}" />
    <!-- Subtle Grid Lines -->
    <g stroke="${border}" stroke-width="1" opacity="0.5">
      <line x1="0" y1="90" x2="840" y2="90" />
      <line x1="0" y1="440" x2="840" y2="440" />
      <line x1="480" y1="90" x2="480" y2="440" />
    </g>
    <!-- Header Bar -->
    <circle cx="44" cy="46" r="6" fill="${accent}" />
    <text x="62" y="51" fill="${fg}" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="600" letter-spacing="0.14em">${config.tag}</text>
    <text x="796" y="51" text-anchor="end" fill="${muted}" font-family="JetBrains Mono, monospace" font-size="12">PRODUCTION · TLS 1.3</text>

    <!-- Left Column: Title & Architecture Metrics -->
    <text x="44" y="152" fill="${fg}" font-family="Inter, system-ui, sans-serif" font-size="30" font-weight="600" letter-spacing="-0.02em">${config.title}</text>
    <text x="44" y="186" fill="${muted}" font-family="Inter, system-ui, sans-serif" font-size="15" font-weight="400">${config.subtitle}</text>

    <!-- Architecture Nodes -->
    <rect x="44" y="220" width="396" height="184" rx="16" fill="${cardBg}" stroke="${border}" stroke-width="1.5" />
    ${config.metrics
      .map(
        (m, idx) => `
      <g transform="translate(68, ${258 + idx * 46})">
        <rect x="0" y="-14" width="6" height="20" rx="3" fill="${accent}" />
        <text x="20" y="2" fill="${fg}" font-family="JetBrains Mono, monospace" font-size="14" font-weight="500">${m}</text>
      </g>
    `
      )
      .join('')}

    <!-- Right Column: Code / Service Spec -->
    <rect x="508" y="124" width="288" height="280" rx="16" fill="${isCream ? '#161616' : '#0E0E0E'}" stroke="${border}" stroke-width="1.5" />
    <circle cx="534" cy="150" r="4.5" fill="#75C5DE" />
    <circle cx="550" cy="150" r="4.5" fill="#4A5560" />
    <circle cx="566" cy="150" r="4.5" fill="#4A5560" />
    ${config.codeLines
      .map(
        (line, idx) => `
      <text x="530" y="${192 + idx * 32}" fill="${idx === 0 ? '#75C5DE' : '#D7E2EA'}" font-family="JetBrains Mono, monospace" font-size="12.5" opacity="${idx === 0 ? '1' : '0.82'}">${line}</text>
    `
      )
      .join('')}

    <!-- Bottom Bar -->
    <text x="44" y="496" fill="${muted}" font-family="Inter, system-ui, sans-serif" font-size="13" letter-spacing="0.08em">AKASH ENGINEERING ARCHIVE</text>
    <rect x="690" y="476" width="106" height="28" rx="14" fill="${accent}" fill-opacity="0.16" />
    <text x="743" y="494" text-anchor="end" fill="${isCream ? '#111111' : accent}" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">VERIFIED</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const TECHNICAL_VISUAL_ASSETS = {
  followupPipeline: createTechnicalSvgDataUri({
    tag: 'FOLLOWUP · ENQUIRY ENGINE',
    title: 'WhatsApp Pipeline Sync',
    subtitle: 'Real-time lead state machine & reminder scheduler',
    metrics: [
      'Supabase Row-Level Security (RLS)',
      'Sub-40ms State Transition Updates',
      'Automated Follow-Up Queue Worker',
    ],
    codeLines: [
      'POST /api/v1/enquiries/sync',
      'status: "AWAITING_FOLLOWUP"',
      'channel: "WHATSAPP_BUSINESS"',
      'priority: "HIGH_INTENT"',
      'nextReminder: "2026-09-29T14:00Z"',
      'rlsPolicy: "tenant_isolation_v2"',
    ],
  }),
  followupSchema: createTechnicalSvgDataUri({
    tag: 'FOLLOWUP · DATA MODEL',
    title: 'PostgreSQL Lead Graph',
    subtitle: 'Indexed relational schema for high-volume SMB workspaces',
    metrics: [
      'Composite B-Tree Enquiry Indexes',
      'Zero-Data-Loss Webhook Idempotency',
      'TypeScript End-to-End Type Safety',
    ],
    codeLines: [
      'CREATE INDEX idx_followup_due',
      'ON enquiries (workspace_id, due_at)',
      'WHERE status != \'CONVERTED\';',
      '--',
      'SELECT count(*) FROM active_leads',
      'GROUP BY stage_bucket;',
    ],
    theme: 'cream',
  }),
  ashaBackend: createTechnicalSvgDataUri({
    tag: 'ASHA BOUTIQUE · FLASK API',
    title: 'Catalog & Order Service',
    subtitle: 'RESTful inventory architecture backed by MongoDB & AWS',
    metrics: [
      'Python Flask Blueprint Modular API',
      'MongoDB Aggregated Variant Queries',
      'AWS EC2 + Nginx Reverse Proxy',
    ],
    codeLines: [
      '@catalog_bp.route("/collections")',
      'def list_curated_pieces():',
      '  cursor = db.inventory.find({',
      '    "inStock": True,',
      '    "season": "EDITORIAL_26"',
      '  }).sort("priority", -1)',
    ],
  }),
  ashaCloud: createTechnicalSvgDataUri({
    tag: 'ASHA BOUTIQUE · INFRASTRUCTURE',
    title: 'AWS + Nginx Deployment',
    subtitle: 'Production Linux server configuration & Gunicorn workers',
    metrics: [
      'Nginx TLS Termination & Gzip',
      'Gunicorn Pre-Fork WSGI Workers',
      'Automated S3 Media Asset Delivery',
    ],
    codeLines: [
      'upstream asha_flask_cluster {',
      '  server 127.0.0.1:8000 fail_timeout=0;',
      '}',
      'proxy_set_header X-Forwarded-Proto',
      '  $scheme;',
      'ssl_protocols TLSv1.3;',
    ],
    theme: 'cream',
  }),
  beyondMeSpring: createTechnicalSvgDataUri({
    tag: 'BEYONDME · SPRING BOOT CORE',
    title: 'Reflection Service Core',
    subtitle: 'Java Spring Boot microservices & Python AI insight pipeline',
    metrics: [
      'Spring Boot 3 + JWT Auth Filter',
      'Python NLP Reflection Service',
      'MongoDB Time-Series Journaling',
    ],
    codeLines: [
      '@RestController',
      '@RequestMapping("/api/v1/reflections")',
      'public class ReflectionController {',
      '  @PostMapping("/analyze")',
      '  public ResponseEntity<InsightDTO>',
      '    synthesize(@Valid @RequestBody Entry e)',
    ],
  }),
  beyondMeSecurity: createTechnicalSvgDataUri({
    tag: 'BEYONDME · SECURITY & AI',
    title: 'Encrypted Progress Graph',
    subtitle: 'Privacy-first reflection storage & behavioral milestone engine',
    metrics: [
      'AES-256 Field-Level Journal Encryption',
      'Stateless OAuth2 + Refresh Rotation',
      'Async Python Embedding Pipeline',
    ],
    codeLines: [
      'SecurityFilterChain filterChain(',
      '  HttpSecurity http) throws Exception {',
      '  return http.csrf(AbstractHttpConfigurer',
      '    ::disable)',
      '    .sessionManagement(STATELESS)',
      '    .build();',
    ],
    theme: 'cream',
  }),
};

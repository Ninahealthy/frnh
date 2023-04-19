(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4666:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__VYZ3G",
	"navbar": "Header_navbar__Qt0Y4",
	"hamburger": "Header_hamburger__fRP_j",
	"bar": "Header_bar__YqXdy",
	"navmenu": "Header_navmenu__KM6Gi",
	"navitem": "Header_navitem___mjug",
	"navlink": "Header_navlink__LbXMl",
	"navlogo": "Header_navlogo__wX0wO",
	"active": "Header_active__EB8lX"
};


/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/young-woman.png
var young_woman = __webpack_require__(3515);
;// CONCATENATED MODULE: ./components/Author.js



const style = {
    width: 100,
    height: 100
};
function Author() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("author", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "About Author"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: young_woman/* default */.Z,
                            alt: "Nina Bernard",
                            style: style,
                            sizes: "30vw"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "Salut! C'est Nina, le visage derri\xe8re NinaHealthy.com ! Ici Je partage des choses que nous pouvons tous trouver adapt\xe9es et b\xe9n\xe9fiques dans notre propre vie quotidienne. Les choses dont j’\xe9cris sont g\xe9n\xe9ralement l\xe9g\xe8res et agr\xe9ables \xe0 lire. J’aime \xe9crire sur la beaut\xe9, la vie, le drame, et tout ce qui suscite mon int\xe9r\xeat.",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "Suivez-moi sur pinterest pour des id\xe9es de repas v\xe9g\xe9taliens gratuits, des recettes et des astuces pour Healthy-girl."
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer.js

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Toute information publi\xe9e sur ce site n'a pas pour intention ou ne sous-entend pas de se substituer \xe0 un conseil m\xe9dical professionnel, un diagnostic ou un traitement.",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " Tout le contenu, y compris le texte, les graphiques, les images et les informations, contenus ou disponibles via ce site sont destin\xe9s uniquement \xe0 des fins d'information g\xe9n\xe9rale.",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " Vous ne devriez prendre aucune action avant de consulter un professionnel de la sant\xe9.",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "\xa9 ninahealthy.com 2020 - 2023"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("social", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.pinterest.fr/INinaBernard/",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/pinterest.svg",
                                    alt: "pinterest icon",
                                    width: 50,
                                    height: 50
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("footernav", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/Privacy-policy",
                                    children: "Privacy Policy"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/Terms-and-conditions",
                                    children: "Terms And Conditions"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/Important-disclaimer",
                                    children: "Important Disclaimer"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/Contact",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/About-me",
                                    children: "About"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(4666);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js



function Header() {
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const openMenu = ()=>setIsOpen(!isOpen);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: (Header_module_default()).header,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (Header_module_default()).navbar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (Header_module_default()).navlogo,
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                            children: "NH\uD83D\uDC9A"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: isOpen === false ? (Header_module_default()).navmenu : (Header_module_default()).navmenu + " " + (Header_module_default()).active,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Header_module_default()).navitem,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isOpen === false ? (Header_module_default()).navlink : (Header_module_default()).navlink + " " + (Header_module_default()).active,
                                    onClick: openMenu,
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "Actualit\xe9s"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Header_module_default()).navitem,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isOpen === false ? (Header_module_default()).navlink : (Header_module_default()).navlink + " " + (Header_module_default()).active,
                                    onClick: openMenu,
                                    href: "/Cuisine",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "Cuisine"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Header_module_default()).navitem,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isOpen === false ? (Header_module_default()).navlink : (Header_module_default()).navlink + " " + (Header_module_default()).active,
                                    onClick: openMenu,
                                    href: "/Fitness",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "Fitness"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Header_module_default()).navitem,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isOpen === false ? (Header_module_default()).navlink : (Header_module_default()).navlink + " " + (Header_module_default()).active,
                                    onClick: openMenu,
                                    href: "/Bien-etre",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "Bien-\xeatre"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Header_module_default()).navitem,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isOpen === false ? (Header_module_default()).navlink : (Header_module_default()).navlink + " " + (Header_module_default()).active,
                                    onClick: openMenu,
                                    href: "/Beauty",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: "Beauty"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: isOpen === false ? (Header_module_default()).hamburger : (Header_module_default()).hamburger + " " + (Header_module_default()).active,
                        onClick: openMenu,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Header_module_default()).bar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Header_module_default()).bar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Header_module_default()).bar
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Search.js



function SearchForm() {
    const [searchValue, setSearchValue] = useState("");
    function handleSearch(e) {
        e.preventDefault();
        console.log(searchValue);
        // Open the search results in a new tab
        window.open(`/search?q=${searchValue}`);
    }
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("form", {
            className: Styles.form,
            children: [
                /*#__PURE__*/ _jsx("input", {
                    className: Styles.input,
                    type: "text",
                    placeholder: "Comment Puis-Je Vous Aider ?",
                    value: searchValue,
                    onChange: (e)=>setSearchValue(e.target.value)
                }),
                /*#__PURE__*/ _jsx("button", {
                    className: Styles.button,
                    type: "submit",
                    onClick: handleSearch,
                    children: "Help !"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Consent.js


function Consent() {
    const [consent, setConsent] = (0,external_react_.useState)(false);
    const handleConsent = ()=>{
        document.cookie = "consent=true; max-age=2592000; path=/"; // Set cookie to expire in 30 days
        setConsent(true);
    };
    (0,external_react_.useEffect)(()=>{
        const consentCookie = document.cookie.split(";").find((cookie)=>cookie.trim().startsWith("consent="));
        if (consentCookie) {
            const consentValue = consentCookie.split("=")[1];
            if (consentValue === "true") {
                setConsent(true);
            }
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("consent", {
        children: consent ? /*#__PURE__*/ jsx_runtime_.jsx("text", {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            className: "button-consent",
            onClick: handleConsent,
            children: [
                "Ce site utilise des cookies pour am\xe9liorer votre exp\xe9rience utilisateur et fournir du contenu personnalis\xe9.",
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                        children: " J'accepte"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/_app.js








function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Author, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Consent, {})
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,636,675,515], () => (__webpack_exec__(9653)));
module.exports = __webpack_exports__;

})();
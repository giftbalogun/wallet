(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["Rates.routes"], {
        "0004": function (t, n, s) {
            t.exports = s.p + "img/PRT.80901c7c.svg"
        },
        "0683": function (t, n, s) {
            t.exports = s.p + "img/SGD.9b87240a.svg"
        },
        "097f": function (t, n, s) {
            t.exports = s.p + "img/curr.da9167cf.svg"
        },
        "103c": function (t, n, s) {
            t.exports = s.p + "img/GER.0b2658f7.svg"
        },
        2381: function (t, n, s) {
            t.exports = s.p + "img/ESP.04419019.svg"
        },
        "2fdb": function (t, n, s) {
            "use strict";
            var e = s("5ca1"),
                a = s("d2c8"),
                c = "includes";
            e(e.P + e.F * s("5147")(c), "String", {
                includes: function (t) {
                    return !!~a(this, t, c).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        "32d1": function (t, n, s) {
            "use strict";
            s.r(n);
            var e = function () {
                    var t = this,
                        n = t.$createElement,
                        s = t._self._c || n;
                    return s("div", {
                        staticClass: "section-rate"
                    }, [s("div", {
                        staticClass: "rate-cal-div"
                    }, [s("div", {
                        staticClass: "row"
                    }, [s("div", {
                        staticClass: "col-md-6 col-md-offset-3 mt-25"
                    }, [s("RateCalculator")], 1)])])])
                },
                a = [],
                c = (s("ac6a"), s("7f7f"), s("6762"), s("2fdb"), function () {
                    return s.e("chunk-3b7d8378").then(s.bind(null, "dba1"))
                }),
                o = function () {
                    return s.e("chunk-60255b9f").then(s.bind(null, "e124"))
                },
                r = {
                    data: function () {
                        return {
                            apiUrl: "".concat("https://api.mypatricia.co", "/landing"),
                            tradeNowURL: "/giftcards/sell/",
                            selectedCardUuid: "",
                            allCards: [],
                            searchInput: "",
                            showPM: !0,
                            showBTC: !0,
                            showError: !1
                        }
                    },
                    components: {
                        RateCalculator: o,
                        CardNotFound: c
                    },
                    computed: {
                        cards: function () {
                            var t = this;
                            return this.allCards.filter((function (n) {
                                return !t.searchInput || n.name.toLowerCase().includes(t.searchInput.toLowerCase())
                            }))
                        }
                    },
                    watch: {
                        searchInput: function (t) {
                            t ? ("bitcoin".toLowerCase().includes(t) || "btc".toLowerCase().includes(t) ? (this.showBTC = !0, this.showPM = !1) : "perfect money".toLowerCase().includes(t) || "pm".toLowerCase().includes(t) ? (this.showBTC = !1, this.showPM = !0) : (this.showBTC = !1, this.showPM = !1), this.cards.length > 0 && (this.showError = !1)) : (this.showError = !1, this.showBTC = !0, this.showPM = !0)
                        }
                    },
                    methods: {
                        cancel: function () {
                            this.searchInput = ""
                        },
                        getFormattedCardTypeText: function (t) {
                            var n = "";
                            return n = "picture" == t ? "Physical Card" : "e-code" == t ? "E-code" : "large-card" == t ? "Large Card" : "discounted" == t ? "Discounted" : "cash-receipt" == t ? "Cash Receipt" : "debit-receipt" == t ? "Debit Receipt" : "no-receipt" == t ? "No Receipt" : t, n
                        },
                        getFormattedCountryText: function (t) {
                            t = t.toUpperCase();
                            var n = "";
                            return n = "USD" == t ? "United State of America" : "CAD" == t ? "Canada" : "GBP" == t ? "United Kingdom" : "AUD" == t ? "Australia" : "EUR" == t ? "EURO" : "NZD" == t ? "New Zealand" : "MXN" == t ? "Mexico" : "GER" == t ? "Germany" : "CHF" == t ? "Switzerland" : "SGD" == t ? "Singapore" : "NLD" == t ? "Netherlands" : "ITL" == t ? "Italy" : "BEL" == t ? "Belgium" : t, n
                        },
                        getCountryFlag: function (t) {
                            var n = t.slice(0, 2),
                                s = "https://www.countryflags.io/".concat(n, "/flat/64.png");
                            return s
                        },
                        fetchSellCards: function () {
                            var t = this;
                            $.ajax({
                                url: t.apiUrl + "/card/sell/all",
                                type: "get",
                                beforeSend: function () {
                                    t.$root.showLoader()
                                },
                                error: function (t) {},
                                complete: function () {
                                    t.$root.hideLoader()
                                },
                                success: function (n) {
                                    var s = n.data.cards;
                                    t.populateRateCards(s)
                                }
                            })
                        },
                        fetchRate: function (t) {
                            var n = this;
                            $(".rate-card.active").removeClass("active"), $("#" + t).addClass("active"), "BTC" === t ? $.ajax({
                                url: n.apiUrl + "/btc/rate",
                                type: "get",
                                beforeSend: function () {
                                    n.$root.showLoader()
                                },
                                error: function (t) {},
                                complete: function () {
                                    n.$root.hideLoader()
                                },
                                success: function (t) {
                                    n.showRates(t, "btc")
                                }
                            }) : "PM" === t ? $.ajax({
                                url: n.apiUrl + "/pm/rate",
                                type: "get",
                                beforeSend: function () {
                                    n.$root.showLoader()
                                },
                                error: function (t) {},
                                complete: function () {
                                    n.$root.hideLoader()
                                },
                                success: function (t) {
                                    n.showRates(t, "pm")
                                }
                            }) : (this.selectedCardUuid = t, $.ajax({
                                url: n.apiUrl + "/card/sell/" + t,
                                type: "get",
                                beforeSend: function () {
                                    n.$root.showLoader()
                                },
                                error: function (t) {},
                                complete: function () {
                                    n.$root.hideLoader()
                                },
                                success: function (t) {
                                    var s = t.data.variations;
                                    n.showRates(s, "giftcards")
                                }
                            }))
                        },
                        showRates: function (t, n) {
                            var e = this;
                            $("#ratesBlock").empty(), "btc" === n ? ($("#ratesBlock").append("<div class='col-lg-4 col-sm-6'>\n          <div class='py-2'>\n            <div class='card shadow shadow-lg--hover mt-20'>\n              <div class='card-head'>\n                <img class='rate-country' src='" + s("d58f") + "'/>\n                <h6 class='font-weight-bold'>BTC</h6>\n              </div>\n              <hr>\n              <div class='card-body btc-body'>\n              </div>\n            </div>\n          </div>\n        </div>"), $(".card-body.btc-body").append("<div class=''>\n                  <p class='card-body-inner'>\n                    <span class='font-weight-bold pr-5 left'>Buy Rate: </span>\n                    <span class='right font-weight-bold text-blue'>â‚¦" + t.data.usd_nra_buy + "</span>\n                  </p>\n                </div>"), $(".card-body.btc-body").append("<div class=''>\n                  <p class='card-body-inner'>\n                    <span class='font-weight-bold pr-5 left'>Sell Rate: </span>\n                    <span class='right font-weight-bold text-blue'>â‚¦" + t.data.usd_nra_sell + "</span>\n                  </p>\n"), $(".card-body.btc-body").append("<div class='placebottom'>\n                <a href='/bitcoin/trade' class='btn text-capitalize btn-round'>\n                  <span class='btn-inner--text'>Trade Now</span>\n                </a>\n                </div>")) : "pm" === n ? ($("#ratesBlock").append("<div class='col-lg-4 col-sm-6'>\n          <div class='py-2'>\n            <div class='card shadow shadow-lg--hover mt-20'>\n              <div class='card-head'>\n                <img class='rate-country' src='" + s("54d9") + "'/>\n                <h6 class='font-weight-bold'>Perfect Money</h6>\n              </div>\n              <hr>\n              <div class='card-body btc-body'>\n              </div>\n            </div>\n          </div>\n        </div>"), $(".card-body.btc-body").append("<div class=''>\n                  <p class='card-body-inner'>\n                    <span class='font-weight-bold pr-5 left'>Buy Rate: </span>\n                    <span class='right font-weight-bold text-blue'>â‚¦" + t.data.usd_nra_buy + "</span>\n                  </p>\n                </div>"), $(".card-body.btc-body").append("<div class=''>\n                  <p class='card-body-inner'>\n                    <span class='font-weight-bold pr-5 left'>Sell Rate: </span>\n                    <span class='right font-weight-bold text-blue'>â‚¦" + t.data.usd_nra_sell + "</span>\n                  </p>\n                </div>"), $(".card-body.btc-body").append("<div class='placebottom'>\n                <a href='/pm/trade' class='btn text-capitalize btn-round'>\n                  <span class='btn-inner--text'>Trade Now</span>\n                </a>\n                </div>")) : t.forEach((function (t) {
                                $("#ratesBlock").append("<div class='col-lg-5 pr-15 pl-15'>\n          <div class='py-2'>\n            <div class='card shadow shadow-lg--hover mt-20'>\n              <div class='card-head'>\n               <div class='country first'>\n                <img class='rate-country' src='" + s("f1c2")("./" + t.currency + ".svg") + "'/>\n                <h6>" + t.currency + "</h6>\n               </div>\n               <div class='second'>\n                 <p class='ml-5'>MIN($) ----- MAX($)</p>\n               </div>\n               <div class='border-left last'>\n                 <div>\n                   <p>RATES(N)</p>\n               </div>\n              </div>\n              </div>\n              <hr>\n              <div class='card-body cardheightincrease'>\n               <div class='" + t.currency + "-body''>\n               </div>\n              </div>\n            </div>\n          </div>\n        </div>"), t.rate_variations.forEach((function (n) {
                                    $("." + t.currency + "-body").append("                  <div class='card-body-inner'>\n                     <h6 class='blue first'>" + e.getFormattedCardTypeText(n.card_acceptance_form) + "</h6>\n                     <div class='second'>\n                         <div class='second-inner'>\n                           <p>" + n.face_value_range_from + "</p>\n                           <p style='color: #E4E4E4;'>to</p>\n                           <p>" + n.face_value_range_to + "</p>\n                         </div>\n                     </div>\n                   <div class='border-left last'>\n                       <div>\n                           <p class='font-weight-bold'>â‚¦" + n.rate + "</p>\n                   </div>\n               </div>\n              </div>")
                                })), $(".card-body ." + t.currency + "-body").append("<div class='placebottom'>\n                <hr>\n                <a href='" + e.tradeNowURL + e.selectedCardUuid + "' class='btn text-capitalize btn-round'>\n                  <span class='btn-inner--text'>Trade Now</span>\n                </a>\n                </div>")
                            })), document.getElementById("ratesBlock").scrollIntoView()
                        },
                        populateRateCards: function (t) {
                            this.allCards = t
                        }
                    },
                    mounted: function () {},
                    updated: function () {
                        $('[data-toggle="tooltip"]').tooltip(), 1 == this.cards.length && this.fetchRate(this.cards[0].uuid), 0 == this.cards.length && this.searchInput && (this.showBTC ? this.fetchRate("BTC") : this.showPM ? this.fetchRate("PM") : ($("#ratesBlock").empty(), this.showError = !0))
                    }
                },
                i = r,
                d = (s("b18c"), s("2877")),
                p = Object(d["a"])(i, e, a, !1, null, "1dcba01e", null);
            n["default"] = p.exports
        },
        "3f1d": function (t, n, s) {
            t.exports = s.p + "img/NGN.230fcb7d.svg"
        },
        "45ba": function (t, n, s) {
            t.exports = s.p + "img/EUR.1262cc6f.svg"
        },
        "470b": function (t, n, s) {
            t.exports = s.p + "img/HKG.df8263a2.svg"
        },
        "480a": function (t, n, s) {
            t.exports = s.p + "img/BRL.860a5caf.svg"
        },
        "4bb5": function (t, n, s) {
            t.exports = s.p + "img/CHF.36102097.svg"
        },
        5147: function (t, n, s) {
            var e = s("2b4c")("match");
            t.exports = function (t) {
                var n = /./;
                try {
                    "/./" [t](n)
                } catch (s) {
                    try {
                        return n[e] = !1, !"/./" [t](n)
                    } catch (a) {}
                }
                return !0
            }
        },
        "54d9": function (t, n, s) {
            t.exports = s.p + "img/pm.f6160219.svg"
        },
        "600f": function (t, n, s) {
            t.exports = s.p + "img/FRA.0add896e.svg"
        },
        6762: function (t, n, s) {
            "use strict";
            var e = s("5ca1"),
                a = s("c366")(!0);
            e(e.P, "Array", {
                includes: function (t) {
                    return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), s("9c6c")("includes")
        },
        "6e03": function (t, n, s) {
            t.exports = s.p + "img/ITL.7be02ac9.svg"
        },
        "74ee": function (t, n, s) {
            t.exports = s.p + "img/RUB.42f149df.svg"
        },
        "852a": function (t, n, s) {
            t.exports = s.p + "img/IRL.e458ccc3.svg"
        },
        "8afa": function (t, n, s) {
            t.exports = s.p + "img/ZAR.2d0b3236.svg"
        },
        9257: function (t, n, s) {
            t.exports = s.p + "img/GRC.85f76395.svg"
        },
        "95fc": function (t, n, s) {
            t.exports = s.p + "img/CAD.20b101e9.svg"
        },
        9712: function (t, n, s) {
            t.exports = s.p + "img/JPY.58875434.svg"
        },
        9973: function (t, n, s) {
            t.exports = s.p + "img/TUR.a7a175cc.svg"
        },
        "9b9d": function (t, n, s) {
            t.exports = s.p + "img/card-type.7a408e45.svg"
        },
        ab5a: function (t, n, s) {
            t.exports = s.p + "img/NLD.61d4dfcd.svg"
        },
        b18c: function (t, n, s) {
            "use strict";
            var e = s("b58f"),
                a = s.n(e);
            a.a
        },
        b58f: function (t, n, s) {},
        bd0f: function (t, n, s) {
            t.exports = s.p + "img/NOK.1e36e7ae.svg"
        },
        cba5: function (t, n, s) {
            t.exports = s.p + "img/FIN.3420af1d.svg"
        },
        d004: function (t, n, s) {
            t.exports = s.p + "img/AUT.75c0f597.svg"
        },
        d253: function (t, n, s) {
            t.exports = s.p + "img/SWE.b40e59cc.svg"
        },
        d2c8: function (t, n, s) {
            var e = s("aae3"),
                a = s("be13");
            t.exports = function (t, n, s) {
                if (e(n)) throw TypeError("String#" + s + " doesn't accept regex!");
                return String(a(t))
            }
        },
        d477: function (t, n, s) {
            t.exports = s.p + "img/AUD.081926c8.svg"
        },
        d58f: function (t, n, s) {
            t.exports = s.p + "img/bitcoin.fb27c173.svg"
        },
        d900: function (t, n, s) {
            t.exports = s.p + "img/DMK.ccb4950c.svg"
        },
        dfc8: function (t, n, s) {
            t.exports = s.p + "img/NZD.efe0ed3b.svg"
        },
        e18f: function (t, n, s) {
            t.exports = s.p + "img/BEL.eb91cb04.svg"
        },
        f1c2: function (t, n, s) {
            var e = {
                "./AUD.svg": "d477",
                "./AUT.svg": "d004",
                "./BEL.svg": "e18f",
                "./BRL.svg": "480a",
                "./CAD.svg": "95fc",
                "./CHF.svg": "4bb5",
                "./DMK.svg": "d900",
                "./ESP.svg": "2381",
                "./EUR.svg": "45ba",
                "./FIN.svg": "cba5",
                "./FRA.svg": "600f",
                "./GBP.svg": "fbf0",
                "./GER.svg": "103c",
                "./GRC.svg": "9257",
                "./HKG.svg": "470b",
                "./IRL.svg": "852a",
                "./ITL.svg": "6e03",
                "./JPY.svg": "9712",
                "./MXN.svg": "f885",
                "./NGN.svg": "3f1d",
                "./NLD.svg": "ab5a",
                "./NOK.svg": "bd0f",
                "./NZD.svg": "dfc8",
                "./PRT.svg": "0004",
                "./RUB.svg": "74ee",
                "./SGD.svg": "0683",
                "./SGP.svg": "f419",
                "./SWE.svg": "d253",
                "./TUR.svg": "9973",
                "./USD.svg": "fa9c",
                "./ZAR.svg": "8afa",
                "./card-type.svg": "9b9d",
                "./curr.svg": "097f"
            };

            function a(t) {
                var n = c(t);
                return s(n)
            }

            function c(t) {
                if (!s.o(e, t)) {
                    var n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return e[t]
            }
            a.keys = function () {
                return Object.keys(e)
            }, a.resolve = c, t.exports = a, a.id = "f1c2"
        },
        f419: function (t, n, s) {
            t.exports = s.p + "img/SGP.d27e87cd.svg"
        },
        f885: function (t, n, s) {
            t.exports = s.p + "img/MXN.5346c0e9.svg"
        },
        fa9c: function (t, n, s) {
            t.exports = s.p + "img/USD.5491454a.svg"
        },
        fbf0: function (t, n, s) {
            t.exports = s.p + "img/GBP.74b5851e.svg"
        }
    }
]);
//# sourceMappingURL=Rates.routes.498e5893.js.map

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-feeb1f22", "chunk-2d21f0b8", "chunk-2d21f0b8"], {
        "193e": function (t, a, i) {},
        3696: function (t, a, i) {
            t.exports = i.p + "img/naira1.05ffd0dd.svg"
        },
        "3d9d": function (t, a, i) {
            "use strict";
            i.r(a);
            var e = function () {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "col-md-6 col-sm-12 w-100"
                    }, [i("div", {
                        staticClass: "panel h-320  p-20 row "
                    }, [i("div", {
                        staticClass: "col-sm-7 col-xs-12"
                    }, [t._m(0), i("div", [t._m(1), i("div", [i("p", {
                        staticClass: "text-green-dark text-lg"
                    }, [t._v("â‚¦" + t._s(t._f("formatAmount")(t.balance))), i("i", {
                        staticClass: "text-muted icon-question3 position-right",
                        attrs: {
                            "data-toggle": "tooltip",
                            title: this.actualBalanceInfo,
                            "data-placement": "right"
                        }
                    })])])]), i("div", [i("p", {
                        staticClass: "text-md"
                    }, [t._v("Book Balance: "), i("span", {
                        staticClass: "bolder"
                    }, [t._v("â‚¦" + t._s(t._f("formatAmount")(t.initial_balance)))]), i("i", {
                        staticClass: "text-muted icon-question3 position-right",
                        attrs: {
                            "data-toggle": "tooltip",
                            title: this.bookBalanceInfo,
                            "data-placement": "right"
                        }
                    })])])]), t._m(2)])])
                },
                n = [function () {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", {
                        staticClass: "d-flex space-between row-sm"
                    }, [e("div", {
                        staticClass: "d-flex "
                    }, [e("img", {
                        staticClass: "img-responsive img-small",
                        attrs: {
                            src: i("3696")
                        }
                    }), e("p", {
                        staticClass: "f-18 bolder pt-10 ml-10"
                    }, [t._v("Naira Wallet")])])])
                }, function () {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "ml-30 mt-20"
                    }, [i("p", {
                        staticClass: "text-md"
                    }, [t._v("Available Balance:")])])
                }, function () {
                    var t = this,
                        a = t.$createElement,
                        i = t._self._c || a;
                    return i("div", {
                        staticClass: "col-sm-5 col-xs-12 mt-5"
                    }, [i("div", {
                        staticClass: "d-flex-col mt-non"
                    }, [i("a", {
                        staticClass: "btn-patricia-mine d-flex center btn-large"
                    }, [t._v("\n                    View More\n                ")])])])
                }],
                s = i("d7c2"),
                l = {
                    props: ["balance", "initial_balance"],
                    filters: {
                        formatAmount: s["a"]
                    },
                    updated: function () {
                        $('[data-toggle="tooltip"]').tooltip()
                    },
                    data: function () {
                        return {
                            nairaSvg: "https://storage.googleapis.com/patricia-website-assets/naira.dd8aec3e.svg",
                            bookBalanceInfo: "Book Balance: This is your overall balance. It may include amount not yet cleared for withdrawal.",
                            actualBalanceInfo: "Available Balance: This is your balance available for use or withdrawal."
                        }
                    }
                },
                c = l,
                o = (i("c38b"), i("2877")),
                r = Object(o["a"])(c, e, n, !1, null, "15a39d4e", null);
            a["default"] = r.exports
        },
        c38b: function (t, a, i) {
            "use strict";
            var e = i("193e"),
                n = i.n(e);
            n.a
        },
        d7c2: function (t, a, i) {
            "use strict";
            i.d(a, "a", (function () {
                return e
            })), i.d(a, "b", (function () {
                return n
            }));
            i("c5f6");

            function e(t) {
                var a = Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                return a.format(Number(t))
            }

            function n(t) {
                var a = Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 5,
                    maximumFractionDigits: 5
                });
                return a.format(Number(t))
            }
        }
    }
]);
//# sourceMappingURL=chunk-feeb1f22.dc278a07.js.map
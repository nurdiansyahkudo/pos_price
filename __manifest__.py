{
    "name": "POS Format Price Without Decimal",
    "depends": ["point_of_sale"],
    "assets": {
        "point_of_sale.assets": [
            "pos_price/static/src/js/orderline.js",
            "pos_price/static/src/xml/orderline.xml",
        ],
    },
    "installable": True,
    "auto_install": False,
    "application": False,
}

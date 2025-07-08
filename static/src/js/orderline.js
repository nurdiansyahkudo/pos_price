import { Orderline as OriginalOrderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { patch } from "@web/core/utils/patch";

function formatPrice(value) {
    const num = Number(value);
    if (isNaN(num)) return value;
    return num.toLocaleString("id-ID", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
}

patch(OriginalOrderline.prototype, {
    setup() {
        super.setup();
        this.formattedLine = {
            ...this.props.line,
            price: formatPrice(this.props.line.price),
            unitPrice: formatPrice(this.props.line.unitPrice),
            oldUnitPrice: formatPrice(this.props.line.oldUnitPrice),
            price_without_discount: formatPrice(this.props.line.price_without_discount),
        };
    },
});

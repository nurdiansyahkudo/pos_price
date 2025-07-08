import { ReceiptScreen } from "@point_of_sale/app/screens/receipt_screen/receipt_screen";
import { patch } from "@web/core/utils/patch";

patch(ReceiptScreen.prototype, {
    generateTicketImage: async function (isBasicReceipt = false) {
        const customFormatCurrency = (val) => {
            const num = Number(val);
            if (isNaN(num)) return val;
            return num.toLocaleString("id-ID", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });
        };

        return await this.renderer.toJpeg(
            this.constructor.components.OrderReceipt,
            {
                data: this.pos.orderExportForPrinting(this.pos.get_order()),
                formatCurrency: customFormatCurrency,
                basic_receipt: isBasicReceipt,
            },
            { addClass: "pos-receipt-print p-3" }
        );
    },
});
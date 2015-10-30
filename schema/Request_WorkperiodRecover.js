'use strict';


/**
 *
 */
exports = module.exports = function(params) {
	var mongoose = params.mongoose;
	var wpRecoverSchema = new mongoose.Schema({
        quantity: { type: Number, required: true },         // quantity equal du duration of period in the planning
        gainedQuantity: { type: Number, required: true },   // quantity earned from recovery of the period, can be modified by approvers
        right: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'Right' },
            name: { type: String, required: true },         // right created after approval
            quantity_unit: { type: String, enum:['D', 'H'], required: true },
            renewal: {                                      // open period for the recovery right
                id: { type: mongoose.Schema.Types.ObjectId, ref: 'RightRenewal' , required: true },
                start: { type: Date, required: true },
                finish: { type: Date, required: true }
            }
        }
	});




	wpRecoverSchema.set('autoIndex', params.autoIndex);

    params.embeddedSchemas.WorperiodRecover = wpRecoverSchema;
};

//
'use strict';
//
const pipeline = (input, ...methods) => methods.reduce((ac,cv) => cv(ac), input);
export default pipeline;

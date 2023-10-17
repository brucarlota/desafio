const formatCNJ = (numeroCNJ) => {
	return `${numeroCNJ.substring(0,7)}-${numeroCNJ.substring(7,9)}.${numeroCNJ.substring(9,13)}.${numeroCNJ.substring(13,14)}.${numeroCNJ.substring(14,16)}.${numeroCNJ.substring(16,20)}`;
};

export { formatCNJ };

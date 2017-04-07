// Copyring 2017, Robert L. Read
// Released under GNU Public License

// Note: This file is primarily based on tetrahelix.el from the gluss repository.
function en(x,y) {
    if (Math.abs( x - y) > 3)
	null
    else if (x == y)
	null
    else return (x < y) ? enx(x,y) : enx(y,x);
}

function enx(x,y) {
    if (x == 0) {
	if (y == 1)
	    return 0;
	else {
	    if (y == 2)
		return 1;
        else if (y == 3)
	    return 3;
        }
    } else if (x == 1) {
	if (y == 2)
	    return 2;
	else {
	    if (y == 3)
		return 4;
            else if (y == 4)
		return 6;
//		return 5;		
        }
    } else {
	var d = y - x;
	var n = neb(y - 1);
//	console.assert(((d >= 1) && (d < 4)));
	if (d == 1)
	    return 2+n;
	else {
	    if (d == 2)
		return 1+n;
            else if (d == 3)
		return 0+n;
        }
    }
}

function neb(x) {
    if (x == 0) return 0;
    if (x == 1) return 1;
    if (x == 2) return 3;
    if (x >= 3) return 3*(x-1);
}


function nd_from_color(c,n) {
    return 3*n + c;
}

function num_red_edges(nds) {
    return (nds - 1)/3;
}
function num_yel_edges(nds) {
    return (nds - 2)/3;
}
function num_blu_edges(nds) {
    return (nds - 3)/3;
}

function num_red_nds(nds) {
    if (nds > 0)
	return num_red_edges(nds) + 1;
    else
	return null;
}
function num_yel_nds(nds) {
    if (nds > 0)
	return num_yel_edges(nds) + 1;
    else
	return null;
}
function num_blu_nds(nds) {
    if (nds > 0)
	return num_yel_edges(nds) + 1;
    else
	return null;
}

function num_ora_edges(nds) {
    if (nds > 1)
	return num_red_nds(nds) + num_yel_nds(nds) + -1;
    else
	return null;
}

function num_grn_edges(nds) {
    if (nds > 2)
	return num_blu_nds(nds) + num_yel_nds(nds) + -1;
    else
	return null;
}

function num_prp_edges(nds) {
    if (nds > 2)
	return num_red_nds(nds) + num_blu_nds(nds) + -1;
    else
	return null;
}

function num_edges(color,nds) {
    if (color == RED)
	return num_red_edges(nds);
    if (color == YEL)
	return num_yel_edges(nds);
    if (color == BLU)
	return num_blue_edges(nds);
    if (color == ORA)
	return num_ora_edges(nds);
    if (color == GRN)
	return num_grn_edges(nds);
    if (color == PRP)
	return num_prp_edges(nds);
}

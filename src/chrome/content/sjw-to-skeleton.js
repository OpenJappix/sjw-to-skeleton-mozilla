(function() {

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;


		v = v.replace(/\bsjw(s?)\b/ig, "skeleton$1");
		v = v.replace(/\bsocjus\b/ig, "skeletonism");
		v = v.replace(/\b(a)n (skeletons?)\b/ig, "$1 $2");
		v = v.replace(/\b(s)ocial justice (warriors?)/ig, "$1keleton $2");

	textNode.nodeValue = v;
}

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());

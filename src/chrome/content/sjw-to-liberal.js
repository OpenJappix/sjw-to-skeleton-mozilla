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

	v = v.replace(/SJW/g, "liberal");
	v = v.replace(/\bsjw\b/g, "liberal");
	v = v.replace(/social justice warrior/g, "liberal");
	v = v.replace(/Social Justice Warrior/g, "liberal");
	v = v.replace(/\ban liberal\b/g, "a liberal");
	v = v.replace(/\bliberal's\b/g, "liberals");
	
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

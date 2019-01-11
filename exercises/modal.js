

class Modal{
	//constructor takes in 3 arguments: the modal shadow dom element, the modal body dom element, and the modal message dom element
	//Modal will have a property called onClose that by the owill eventually be set to a callback set utside
	constructor(modalShadow, modalBody, modelMessage){
		this.modalShadow = modalShadow;
		
		this.modalBody = modalBody;
		this.modelMessage = modelMessage;
		this.onClose = null;
		console.log("Test",this.modalShadow);
		this.hide = this.hide.bind(this);
	}
	//takes in no arguments.
	//returns nothing
	//shows the given modal shadow and the given modal body
	show(){
		$(this.modalShadow).show();
		$(this.modalBody).show();
	}
	//takes in no arguments
	//returns nothing
	//hides the given modal shadow and the given modal body
	hide(){
		$(this.modalShadow).hide();
		$(this.modalBody).hide();
	}
	//takes in a string that it then puts inside the text of the modal message element
	//returns nothing
	updateContents( stringVar ){
		$(this.modelMessage).text(stringVar);
	}
	//takes in no arguments
	//returns nothing
	//hides the modal, removes all existing click handlers from the modal shadow
		//and adds 2 click handlers to the modal shadow: 
			//one that calls whatever callback was assigned to this object's onClose handler
			//calls this object's hide method.  Make sure to use bind to make it correctly bind to the object
				//this.FUNCTIONNAME.bind( this )
			//otherwise it won't work correctly
	init(){
		this.hide();
		$(this.modalShadow).off("click");
		$(this.modalShadow).click(this.onClose);
		$(this.modalShadow).click(this.hide);
	}

}
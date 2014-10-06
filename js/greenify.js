

$(document).ready( function(){
	hide_all_fieldsets();
	$('#fieldset_form').show();
	$('#html_markup').hide();
});

function convert_to_code(){
	$('#html_markup').show();
	document.getElementById('html_markup').innerHTML = document.getElementById('append_to_demo_form').innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') ;
}

function hide_all_fieldsets(){
	$('fieldset[id^="fieldset_"]').hide();
}

$('#lgm_elements').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;

    var get_id = "fieldset_" + valueSelected;

    get_id = prepend_hash(get_id);

    hide_all_fieldsets();
    $(get_id).show();

});

(function( $ ) {
	$.fn.addForm_lgm = function(frm_append_to,frm_class,frm_name) {
			var form = $("<form/>", 
			                { action:'/myaction',
			                  text: "",
			                  name: frm_name,
			                  class: frm_class
			             	}
            			);
			frm_append_to = prepend_hash(frm_append_to);
        	$(frm_append_to).append(form);
	};

	$.fn.addLabel_lgm = function(label_append_to,label_class,label_name,label_value) {
			var label = $("<label/>",
							{ name: label_name,
							  class: label_class,
							  text: label_value
							}
						);
			label_append_to = prepend_period(label_append_to);
			$(label_append_to).append(label);
	};

	$.fn.addTextbox_lgm = function(textbox_append_to,textbox_class,textbox_name){
			var textbox = $("<input/>",
							 { name: textbox_name,
							   class: textbox_class,
							   type: "text"
							 }
						  );
			textbox_append_to = prepend_period(textbox_append_to);
			$(textbox_append_to).append(textbox);
	};

	$.fn.addtextarea_lgm = function(textarea_append_to,textarea_class,textarea_name){
			var textarea = $("<textarea/>",
							 { name: textarea_name,
							   class: textarea_class
							 }
						  );
			textarea_append_to = prepend_period(textarea_append_to);
			$(textarea_append_to).append(textarea);
	};

	$.fn.addtextpassword_lgm = function(textpassword_append_to,textpassword_class,textpassword_name){
			var textpassword = $("<input/>",
							 { name: textpassword_name,
							   class: textpassword_class,
							   type: "password"
							 }
						  );
			textpassword_append_to = prepend_period(textpassword_append_to);
			$(textpassword_append_to).append(textpassword);
	};

	$.fn.addInputbox_lgm = function() {
		return this;
	};

	prepend_hash = function(get_name){
		get_name = "#"+get_name;
		return get_name;
	};

	prepend_period = function(get_name){
		get_name = "."+get_name;
		return get_name;
	} 
	
}(jQuery));
 
//$( "#demo_form" ).addForm_lgm().addClass( "frm_lgm" );

//$("<input type='text'>").appendTo( ".frm_lgm" );


$("#add_frm_lgm").click(function(){	
	
	var frm_append_to = $("#lgm_frm_append_to").val();
	var frm_class = $("#lgm_frm_class").val();
	var frm_name = $("#lgm_frm_name").val();

	if(frm_append_to!=""&&frm_class!=""&&frm_name!="")
		$( "#demo_form" ).addForm_lgm(frm_append_to,frm_class,frm_name);
	else
		return (alert("Fill all required fields"));

	convert_to_code();
});

$("#add_label_lgm").click(function(){

	var label_append_to = $("#lgm_label_append_to").val();
	var label_class = $("#lgm_label_class").val(); 
	var label_name = $("#lgm_label_name").val();
	var label_value = $("#lgm_label_value").val();

	if(label_append_to!=""&&label_class!=""&&label_name!=""&&label_value!="")
		$(label_append_to).addLabel_lgm(label_append_to,label_class,label_name,label_value);
	else
		return (alert("Fill all required fields"));

	convert_to_code();
});

$("#add_textbox_lgm").click(function(){

	var textbox_append_to = $("#lgm_textbox_append_to").val();
	var textbox_class = $("#lgm_textbox_class").val(); 
	var textbox_name = $("#lgm_textbox_name").val();

	if(textbox_append_to!=""&&textbox_class!=""&&textbox_name!="")
		$(textbox_append_to).addTextbox_lgm(textbox_append_to,textbox_class,textbox_name);
	else
		return (alert("Fill all required fields"));

	convert_to_code();

});

$("#add_textarea_lgm").click(function(){

	var textarea_append_to = $("#lgm_textarea_append_to").val();
	var textarea_class = $("#lgm_textarea_class").val(); 
	var textarea_name = $("#lgm_textarea_name").val();

	if(textarea_append_to!=""&&textarea_class!=""&&textarea_name!="")
		$(textarea_append_to).addtextarea_lgm(textarea_append_to,textarea_class,textarea_name);
	else
		return (alert("Fill all required fields"));

	convert_to_code();

});

$("#add_textpassword_lgm").click(function(){

	var textpassword_append_to = $("#lgm_textpassword_append_to").val();
	var textpassword_class = $("#lgm_textpassword_class").val(); 
	var textpassword_name = $("#lgm_textpassword_name").val();

	if(textpassword_append_to!=""&&textpassword_class!=""&&textpassword_name!="")
		$(textpassword_append_to).addtextpassword_lgm(textpassword_append_to,textpassword_class,textpassword_name);
	else
		return (alert("Fill all required fields"));

	convert_to_code();

});


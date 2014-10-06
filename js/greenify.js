

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
							   class: textbox_class
							 }
						  );
			textbox_append_to = prepend_period(textbox_append_to);
			$(textbox_append_to).append(textbox);
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



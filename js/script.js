$(function(){
    $(".box").draggable();
    $("#box1").draggable({scroll:true , revert:"invalid"});
    $("#box2").draggable({axis:"x"});
    $("#box3").draggable({axis:"y"});
    $("#box4").draggable({containment:".container" ,revert:"invalid"});
    
    
    //DROPPABLE
    
    $("#droppable").droppable({
        accept:"#box1",
        drop: function(){
        $(this).text("When a box got an attitude, drop it like this");
    }
    });
    
    //sortable
    //always use ul ans li for sortable
    $("#sortable").sortable({
        connectWith:"#sortableToo",
        placeholder:"placeholder-box"
    });
    $("#sortableToo").sortable({
        connectWith:"#sortable",
    });
    
    //todo list
    $("#todoList ul").sortable({
        connectWith:"ul",
        items:"li:not('.listTitle,.addItem')",
        placeholder:"emptySpace",
    });
    
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            //you pressed enter
            var item = $(this).val();
            $(this).parent().parent().append("<li>"+item+"</li>");
            $(this).val("");
        }
    });
    
    $("#trash").droppable({
        drop:function(event,ui){
            ui.draggable.remove();
        }
    });
    
    //ACCORDIAN
    
    $("#accordion").accordion({
        collapsible:true,//
        heightStyle:"content"
    });
    
    //DATEPICKER
    $(".date").datepicker({
        showOtherMonths:true,
        selectOtherMonths:true,
        showButtonPanel:true,
        changeMonth:true,
        changeYear:true,
        numberOfMonths:2,
        minDate:"-1M+2D",
        maxDate:"+1W",
        
    });
    
    
});
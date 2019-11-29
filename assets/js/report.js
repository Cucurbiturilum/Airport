$(document).ready(function(){
   var reportPerDateBtn = $('#btn-report-per-date');
   var reportPerTailBtn = $('#btn-report-per-tail-number');

   var reportPerDateContent = $('#content-report-per-date');
   var reportPerTailContent = $('#content-report-per-tail');

   reportPerDateContent.show();
   reportPerTailContent.hide();

   reportPerDateBtn.click(function(){
       reportPerDateContent.show();
       reportPerTailContent.hide();
   });

   reportPerTailBtn.click(function(){
       reportPerDateContent.hide();
       reportPerTailContent.show();
   });
});
/*
* placeholder v1.0
* @HTML5 Placeholder Feature Like Chrome
* @author stddup 2014.8.5
*
* Usage:
*
*  $("#mySelector").placeholder();
*
* Notes:
*  - you should set css style like: 
*
*   .placeholder {
*      position: absolute;
*			 left: 0;
*			 top: 0;
*      padding: 5px, 4px;
*		   color: #aaa;
*			 cursor: text;
*    }
*
*   .placeholder-wrapper {
*      position: relative;
*    }
*
*/

;(function($) {
	var isPlaceholderSupported = ('placeholder' in document.createElement('input')) && ('placeholder' in document.createElement('textarea'));
	
	// if (isPlaceholderSupported) {
	// 	$.fn.placeholder = function () {
	// 		return this;
	// 	}
	// 	return ;
	// }
	
	var Placeholder = {

		getPlaceholder: function (el) {
			return $(el).attr('placeholder');
		},

		creatPlaceholder: function (el) {
			var placeholder = this.getPlaceholder(el);
			var id = $(el).attr('id');
			var labelNode = $('<label for=' + id + ' class="placeholder">' + placeholder + '</label>');
			var wrapNode = $('<div class="placeholder-wrapper"></div>');
			
			$(el).wrap(wrapNode);
			$(el).after(labelNode);
		},

		setPlaceholder: function (el) {
			this.creatPlaceholder(el);
			this.bindEvent(el);
		},

		bindEvent: function (el) {
			var _this = this;
			$(el).on('input', function (event) {
			  _this.placeholderActions(event);
			});

			$(el).on('blur', function (event) {
			  _this.placeholderActions(event);
			});

			$(el).on('focus', function (event) {
			  _this.placeholderActions(event);
			});

			$(el).on('keyup', function (event) {
			  _this.placeholderActions(event);
			});
		},

		placeholderActions: function(event) {
		  if ($(event.target).val() !== '') {
		    $(event.target).next().hide();
		  } else {
		    $(event.target).next().show();
		  }
		},

		init: function() {
		  var els = this;
		  for (var i = els.length - 1; i >= 0; i--) {
		    if (els.eq(i).val() != '') {
		      els.eq(i).next().hide();
		    } else {
		      els.eq(i).next().show();
		    }
		    Placeholder.setPlaceholder(els[i])
		  }
		}
	};

	$.fn.placeholder = Placeholder.init;
	
})(jQuery)
( function() {

	const html = htm.bind( wp.element.createElement );

	var __ = wp.i18n.__; // The __() for internationalization.
	var el = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.
	

	registerBlockType( 'gch/code', { 
		title: __( 'Highlighted Code', 'gch' ), // Block title.
		icon: 'editor-code', 
		category: 'common', 
		attributes: {
			code: {
				        type: 'string',
				    }, 
			language: {
				        type: 'string',
				    }, 
			style: {
				        type: 'string',
				    }, 
		},
	


		// The "edit" property must be a valid function.
		edit: function( props ) {
			
			let code = props.attributes.code;
			var language = props.attributes.language;
			var style = props.attributes.style;
			
			let focus = props.isSelected; // Focus — should be truthy.
			var BlockControls = wp.editor.BlockControls;
			var AlignmentToolbar = wp.editor.AlignmentToolbar;
			var Fragment = wp.element.Fragment;
			var InspectorControls = wp.element.InspectorControls;
			var RichText = wp.element.RichText;
			var SelectControl = wp.components.SelectControl;

    		//console.log(props)
			
			if(style) {
				jQuery("#gch-highlight-css-css").attr("href" , style);

			}

			const callHJ = ()=>{

				setTimeout(()=> {
					
					jQuery(".gch_code").each(function() {
						//jQuery(this)[0]
						hljs.highlightBlock( jQuery(this)[0] );
					})


				} , 500)
			} 
			
    		const editTA = (e) => {
    			let code = e.target.value;
    			props.setAttributes( { code: code } );
				callHJ();

    		}

    		const editLanguage = (val) => {
    			props.setAttributes( { language: val } );
    		}

    		const editStyle = (val) => {
    			props.setAttributes( { style: val } );
    			
    			jQuery("#gch-highlight-css-css").attr("href" , val);

    		}




    		let available_languages = [
				{ label: "apache", value: "apache" },
				{ label: "bash", value: "bash" },
				{ label: "cs", value: "cs" },
				{ label: "cpp", value: "cpp" },
				{ label: "css", value: "css" },
				{ label: "coffeescript", value: "coffeescript" },
				{ label: "diff", value: "diff" },
				{ label: "xml", value: "xml" },
				{ label: "http", value: "http" },
				{ label: "ini", value: "ini" },
				{ label: "json", value: "json" },
				{ label: "java", value: "java" },
				{ label: "javascript", value: "javascript" },
				{ label: "makefile", value: "makefile" },
				{ label: "markdown", value: "markdown" },
				{ label: "nginx", value: "nginx" },
				{ label: "objectivec", value: "objectivec" },
				{ label: "php", value: "php" },
				{ label: "perl", value: "perl" },
				{ label: "properties", value: "properties" },
				{ label: "python", value: "python" },
				{ label: "ruby", value: "ruby" },
				{ label: "sql", value: "sql" },
				{ label: "shell", value: "shell"}, 
    		];

			if(focus) {

				return html`<div >
								<${Fragment}>
									<${BlockControls}>
										<${SelectControl} class="gch_lang_selector" value=${language} onChange=${editLanguage} label='' options=${available_languages}  />
										<${SelectControl} class="gch_style_selector" value=${style} onChange=${editStyle} label='' options=${HIGHLIGHTJS_STYLES}  />
										
						            <//>
								<textarea class='${props.className} gch_ta' onChange=${editTA}>${code}</textarea>
						        <//>

							</div>`;
			}
			else {

				callHJ();
				return html`<div >
							<pre><code class="gch_code ${language}">${code}</code></pre>
						</div>`
			}


		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
				let code = props.attributes.code;
				var language = props.attributes.language;
				var style = props.attributes.style;
				
				setTimeout(()=> {
					
					jQuery(".gch_code").each(function() {
						//jQuery(this)[0]
						hljs.highlightBlock( jQuery(this)[0] );
					})


				} , 500)	


				return html`<div >
							<pre><code data-style=${style} class="gch_code ${language}">${code}</code></pre>
						</div>
						`;
		},
	} );
})();
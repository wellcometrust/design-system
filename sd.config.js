const StyleDictionary = require('style-dictionary');

const {
  fileHeader,
} = StyleDictionary.formatHelpers;

/**
 * Custom Format: Custom Media
 * This converts our viewport tokens to the very specific `@custom-media`
 * variable definition format.
 * 
 * 1. Some of our tokens are named using underscores. Convert to hyphens.
 */
StyleDictionary.registerFormat({
  name: "custom/format/css-variables-with-media-queries",
  formatter: function({dictionary, file, options}) {
    const { outputReferences } = options;
    const subTypes = Object.keys(dictionary.properties.space)
    // console.log(subTypes)
    
    return fileHeader({file}) +
    
      subTypes.map(type => {
        const before = type === 'base'
          ? `:root {\n`
          : `@media (min-width: ${type}) {\n  :root {\n`;
        const after = type === 'base' ? '\n}\n' : '\n  }\n}\n';

        const tokens = dictionary.allTokens.filter(({attributes}) => attributes.type === type);

        return before + tokens.map(
          function(prop) {
            const prefix = '--';
            const suffix = ';';
            const { attributes } = prop;
            const variableName = `${attributes.category}-${attributes.item}`;
            let to_ret_prop = `  --${variableName}: `;
            let value = prop.value;
        
            /**
             * A single value can have multiple references either by interpolation:
             * "value": "{size.border.width.value} solid {color.border.primary.value}"
             * or if the value is an object:
             * "value": {
             *    "size": "{size.border.width.value}",
             *    "style": "solid",
             *    "color": "{color.border.primary.value"}
             * }
             * This will see if there are references and if there are, replace
             * the resolved value with the reference's name.
             */
            if (outputReferences && dictionary.usesReference(prop.original.value)) {
              // Formats that use this function expect `value` to be a string
              // or else you will get '[object Object]' in the output
              if (typeof value === 'string') {
                const refs = dictionary.getReferences(prop.original.value);
                refs.forEach(ref => {
                  // value should be a string that contains the resolved reference
                  // because Style Dictionary resolved this in the resolution step.
                  // Here we are undoing that by replacing the value with
                  // the reference's name
                  if (ref.value && ref.name) {
                    value = value.replace(ref.value, function() {
                      // if (format === 'css') {
                        return `var(${prefix}${ref.name})`
                      // } else {
                      //   return `${prefix}${ref.name}`;
                      // }
                    });
                  }
                });
              }
            }
        
            to_ret_prop += prop.attributes.category === 'asset' ? `"${value}"` : value;
        
            // if (format == 'sass' && prop.themeable === true) {
            //   to_ret_prop += ' !default';
            // }
        
            to_ret_prop += suffix;
        
            if (prop.comment && commentStyle !== 'none') {
              if (commentStyle === 'short') {
                to_ret_prop = to_ret_prop.concat(` // ${prop.comment}`);
              } else {
                to_ret_prop = to_ret_prop.concat(` /* ${prop.comment} */`);
              }
            }
        
            return to_ret_prop;
          }
        )
        .join("\n") +
        after
      }).join("\n")
  }
});

module.exports = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'src/build/js/',
      files: [
        {
          destination: 'colours.js',
          format: 'javascript/module-flat',
          options: {
            outputReferences: true
          },
          filter: {
            attributes: {
              category: 'colour'
            }
          }
        },
        {
          destination: 'colours.d.ts',
          format: 'typescript/es6-declarations',
          filter: {
            attributes: {
              category: 'colour'
            }
          }
        }
      ]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'src/build/css/',
      files: [
        {
          destination: 'colours.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: '.foo'
          },
          filter: {
            attributes: {
              category: 'colour'
            }
          }
        },
        {
          destination: 'spacing.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: '.foo'
          },
          filter: {
            attributes: {
              category: 'space'
            }
          }
        },
        {
          destination: 'test.css',
          format: 'custom/format/css-variables-with-media-queries',
          options: {
            outputReferences: true
          },
          filter: {
            attributes: {
              category: 'space'
            }
          }
        }
      ]
    }
  }
}

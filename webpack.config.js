module.exports = (env, others) => {

    console.warn(`*******
                    env=  ${ env}
                *******`)

    console.warn(`*******
                    others=  ${JSON.stringify( others)}
                *******`)
                
    return {
        entry: env === "production" ? "./app.js": "app-dev.js",
        output: {
          filename: "bundle.js"
        },
    }
};

// webpack --env=production
/*
others =  {"_":[],"cache":null,"bail":null,"profile":null,"mode":"production",
"env":"pasta","info-verbosity":"info","infoVerbosity":"info",
"$0":"/Users/dibenedettom/Documents/x_devs/_NEW_CPL/cpl_hot_spot/node_modules/.bin/webpack"}
*/

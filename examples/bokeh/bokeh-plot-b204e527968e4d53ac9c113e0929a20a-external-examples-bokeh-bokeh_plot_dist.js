(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.1.min.js": "JpP8FXbgAZLkfur7LiK3j9AGBhHNIvF742meBJrjO2ShJDhCG2I1uVvW+0DUtrmc", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.1.min.js": "xZlADit0Q04ISQEdKg2k3L4W9AwQBAuDs9nJL9fM/WwzL1tEU9VPNezOFX0nLEAz", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.1.min.js": "4BuPRZkdMKSnj3zoxiNrQ86XgNw0rYmBOxe7nshquXwwcauupgBF2DHLVG1WuZlV", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.1.min.js": "Dv1SQ87hmDqK6S5OhBf0bCuwAEvL5QYL0PuR/F1SPVhCS/r/abjkbpKDYL2zeM19"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("e16633e7-22a7-4e24-b2f1-36da8d71e0df");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e16633e7-22a7-4e24-b2f1-36da8d71e0df' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;ff6463b3-ab43-4023-a2cd-088946dac64a&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;56984&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;56983&quot;}},&quot;id&quot;:&quot;56961&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56892&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56903&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56963&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;56961&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;56962&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;56963&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;56965&quot;}},&quot;id&quot;:&quot;56964&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;56952&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56919&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56978&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56930&quot;}},&quot;id&quot;:&quot;56929&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56955&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56895&quot;}},&quot;id&quot;:&quot;56894&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56934&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;56961&quot;}},&quot;id&quot;:&quot;56965&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56981&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56930&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56980&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56926&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;56925&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;56928&quot;},{&quot;id&quot;:&quot;56932&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;56929&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;56964&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;56969&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;56940&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;56917&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;56921&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;56919&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;56923&quot;}},&quot;id&quot;:&quot;56916&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56925&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;56928&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56899&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;56969&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;56908&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56888&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56898&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;56901&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;56948&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;56939&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56937&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56978&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;56885&quot;},{&quot;id&quot;:&quot;56916&quot;}]},&quot;id&quot;:&quot;56966&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56936&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;56960&quot;}]},&quot;id&quot;:&quot;56959&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56902&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56983&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56921&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56962&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56976&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;56894&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;56897&quot;},{&quot;id&quot;:&quot;56901&quot;},{&quot;id&quot;:&quot;56959&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;56898&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;56950&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;56952&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;56909&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;56886&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;56890&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;56888&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;56892&quot;}},&quot;id&quot;:&quot;56885&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56957&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56899&quot;}},&quot;id&quot;:&quot;56898&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56976&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56926&quot;}},&quot;id&quot;:&quot;56925&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56957&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56906&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56890&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56984&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56917&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56907&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56955&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56933&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;56939&quot;}},&quot;id&quot;:&quot;56935&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56905&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56895&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;56947&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;56948&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;56949&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;56951&quot;}},&quot;id&quot;:&quot;56950&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;56950&quot;}]},&quot;id&quot;:&quot;56960&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56938&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56923&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;56908&quot;}},&quot;id&quot;:&quot;56904&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;56949&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;56947&quot;}},&quot;id&quot;:&quot;56951&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56894&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;56897&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;56902&quot;},{&quot;id&quot;:&quot;56903&quot;},{&quot;id&quot;:&quot;56904&quot;},{&quot;id&quot;:&quot;56905&quot;},{&quot;id&quot;:&quot;56906&quot;},{&quot;id&quot;:&quot;56907&quot;}]},&quot;id&quot;:&quot;56909&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56929&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;56932&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;exSuR+F6lD8730+Nl26yP4cW2c73U8M/nu+nxks3yT9WDi2yne/HP3Noke18P8U/ObTIdr6fuj/Jdr6fGi+tP7gehetRuJ4/ObTIdr6fij/6fmq8dJNoPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[11]}},&quot;selected&quot;:{&quot;id&quot;:&quot;56981&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;56980&quot;}},&quot;id&quot;:&quot;56947&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;56933&quot;},{&quot;id&quot;:&quot;56934&quot;},{&quot;id&quot;:&quot;56935&quot;},{&quot;id&quot;:&quot;56936&quot;},{&quot;id&quot;:&quot;56937&quot;},{&quot;id&quot;:&quot;56938&quot;}]},&quot;id&quot;:&quot;56940&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56886&quot;,&quot;type&quot;:&quot;DataRange1d&quot;}],&quot;root_ids&quot;:[&quot;56966&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"ff6463b3-ab43-4023-a2cd-088946dac64a","root_ids":["56966"],"roots":{"56966":"e16633e7-22a7-4e24-b2f1-36da8d71e0df"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
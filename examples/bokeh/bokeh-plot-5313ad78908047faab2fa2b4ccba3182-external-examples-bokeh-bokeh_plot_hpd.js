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
      };var element = document.getElementById("6d5b06c1-a3f2-438c-9123-a325e36adb5d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6d5b06c1-a3f2-438c-9123-a325e36adb5d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;bfb65d0b-e455-49c7-8fbd-fc42db45620b&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;58391&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;58394&quot;},{&quot;id&quot;:&quot;58398&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;58395&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;58421&quot;},{&quot;id&quot;:&quot;58426&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;58428&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;58409&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;58383&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;58387&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;58385&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;58389&quot;}},&quot;id&quot;:&quot;58382&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;58407&quot;}},&quot;id&quot;:&quot;58401&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58404&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;58420&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58437&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58383&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58400&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;58419&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;58406&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58385&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;58395&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;58398&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;FdslYlvuAsBj4uWDXEIAwBybSRQv7vm/ORh+e8U5+b/CXb/lkxb3v5+ielzXwPa/3fyy8nCh878F5HeyJbfwv4IzPECzS++/fduaHOSC7b+72Q2zz0fsvzQQimVq7uq/TAzRhZhd6b+WTKSdCEnnvwq70GlpE+e/p1lR9Ea/5r+TRDdL21bkv47t2mbsOeS/UpZN1Krg4782clzcK5viv3iKlnlSEuG/uSWW2RNH4L9B3Zth8hffv2M71cYIzN2//taPxYze279XqNQAUWLbvyN25F7rl9q//wdVFWeR2r8JYOmgc9nZv9CA7iFHh9m/BVlrjG4F2b/8S+U6xqfXvwulHBZhPNa/4smyobJb1L+TBwtCtsPQv6B5qO1cb86/M3pnLznuyr8/Q/9DxLjKv3Ol0YoZX8q/rfx+K2Akyb9A6NgKhH7Iv7ToigoRUMO/FCuqJ2iwwr+438yXFPDBv2wxpLYTCb2/Kk1uzlpeur8AR09YWCm2vzqAXto117O/8oNsqMe9sz+MgTxKKAu9P73vnBl6DcA/Z8E4EBhLyz82wG1k+13LPzaPId1/K84/eRTDMttqzj9d0PVcVK7QP/Lif/yhndY/wi9ha7M92D8Lg6Ulk5TYP+Yi0pq+U9o/7ESszapv2j8wDv0IYTTbP8iSJvLjp94/74plKLSF4D+vEKrSKNDgPx6r/xWRzOE/NjCH7HY74j8thTTH1MHiP+uZapGH3eI/wgc5sjat4z+oWVLyQBDkPx2JwdB6cOg/UtHMPxej6D8E2oNAmL/qP35dNxhQVus/zyMUYOuV6z+zFpghB9brPyEVJzB15ew/p+XfaExS7j9fb1voNe3uPwD8hWSAPe8/tAWZlts+7z8nP0UYEpjvP+wjSXpDw+8/LGMYCCe88D8uFPwxSBbxP/siFesHXfI/IpU7TS7D8j/ubhjvPuryP8X4BlV5UPU/5/E7jnWc9T8YgKadct31P/RmpQ+0Xfg/GT5/EWQS+j/pvfpddgD8P4MKnueeJ/w/DWN970yf/D9FjMFG+rL8P9UomVettP0/BEcq+ZQVA0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;1km0O0kj6j86OzT4RnvvP3Iy23XoCPM/5PNAQh1j8z8fUSANtnT0P7CuwlGUn/Q/koGmhkcv9j/+DcQmbaT3PyDz8C8TLfg/IUnZ+Eaf+D+RiTwTDO74P/N7nWZlRPk/7byL3pmo+T/a7JbYvS36Pz7Ri6UlO/o/lqnrQi5Q+j/bLjItSer6P5xESeaE8fo/bJrsStUH+z9y4+gINVn7P2JdmmFru/s/knaaCTvu+z9YhMyzAR38P5RYJed+Rvw/IAVOZy6E/D/1auXftZP8PzxxI5QCrfw/AF9VHdOt/D//0+KL0cT8P+YvwhsXz/w/35RyLlLf/D+AVqM4Bwv9P19rPN1zOP0/xKbJq4l0/T8On743ief9P2Z4JTEKGf4/XYgJbRxR/j/MC8C7c1T+P6nlUmcOWv4/NRBI/blt/j98cVK/F3j+P3VRV+/+yv4/T12FffnU/j8EMoO2/uD+P3XeSmK3F/8/l42MKQ0t/z/IhT09tU7/P/4LLVFGYf8/ELKhHvdOAEAG8iihLHQAQH7nzNBrgABAC8aBwFjaAEACbiPb79oAQHoM6f5b8QBApBiW2VbzAEAGXc9F5QoBQC/+xx/aaQFA/BK2NtuDAUAxWFoySYkBQC4irek7pQFAT8TarPqmAUDj0I8QRrMBQCxpIj9+6gFAXrEMhbYQAkAWQlUaBRoCQGT1vyKSOQJAB+aQ3W5HAkCmkOaYOlgCQD1TLfKwWwJA+CBH1qZ1AkA1S0oeCIICQCQxGFoPDgNAKpr552IUA0BAexAI81cDQLDrBgPKagNAeoQCbL1yA0DWAjPkwHoDQKTiBKaunANAtfwbjUnKA0DsbQu9pt0DQIC/kAyw5wNAtiDTctvnA0DlpwhDAvMDQH4kSW9o+ANAyxgGwgkvBEAMBX8MkkUEQL9IxfpBlwRASOVOk8uwBEC8G8a7j7oEQDG+QVUeVAVAevyOYx1nBUAGoGmnXHcFQL1Z6QNtFwZAhs9fBJmEBkB6r36XHQAHQKGC57nnCQdAw1jfO9MnB0ARY7CRviwHQDVK5lUrbQdAgiOVfMqKCUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;58439&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;58438&quot;}},&quot;id&quot;:&quot;58423&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58439&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;58399&quot;},{&quot;id&quot;:&quot;58400&quot;},{&quot;id&quot;:&quot;58401&quot;},{&quot;id&quot;:&quot;58402&quot;},{&quot;id&quot;:&quot;58403&quot;},{&quot;id&quot;:&quot;58404&quot;},{&quot;id&quot;:&quot;58405&quot;},{&quot;id&quot;:&quot;58406&quot;}]},&quot;id&quot;:&quot;58409&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;58428&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;58407&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;58418&quot;}},&quot;id&quot;:&quot;58422&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;58418&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;58419&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;58420&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;58422&quot;}},&quot;id&quot;:&quot;58421&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58433&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58438&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58387&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;58423&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;58424&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;58425&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;58427&quot;}},&quot;id&quot;:&quot;58426&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58431&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58405&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;58391&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;58394&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;58433&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;58396&quot;}},&quot;id&quot;:&quot;58395&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;58423&quot;}},&quot;id&quot;:&quot;58427&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58402&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;58425&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58389&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;58437&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;58436&quot;}},&quot;id&quot;:&quot;58418&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58436&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;58408&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58399&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;58424&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;58408&quot;}},&quot;id&quot;:&quot;58403&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58392&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;58431&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;58392&quot;}},&quot;id&quot;:&quot;58391&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58396&quot;,&quot;type&quot;:&quot;BasicTicker&quot;}],&quot;root_ids&quot;:[&quot;58382&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"bfb65d0b-e455-49c7-8fbd-fc42db45620b","root_ids":["58382"],"roots":{"58382":"6d5b06c1-a3f2-438c-9123-a325e36adb5d"}}];
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
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
      };var element = document.getElementById("ec63287c-3231-4d0a-bdec-620600d22142");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ec63287c-3231-4d0a-bdec-620600d22142' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;8657e30b-2929-4100-bdcf-e8849b48e1f2&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;/Aa2whic4z+I9BJrZbzjPxPibxOy3OM/n8/Mu/784z8rvSlkSx3kP7eqhgyYPeQ/Q5jjtORd5D/PhUBdMX7kP1tznQV+nuQ/5mD6rcq+5D9yTldWF9/kP/47tP5j/+Q/iikRp7Af5T8WF25P/T/lP6IEy/dJYOU/LfInoJaA5T+534RI46DlP0XN4fAvweU/0bo+mXzh5T9dqJtByQHmP+mV+OkVIuY/dYNVkmJC5j8AcbI6r2LmP4xeD+P7guY/GExsi0ij5j+kOckzlcPmPzAnJtzh4+Y/vBSDhC4E5z9IAuAseyTnP9PvPNXHROc/X92ZfRRl5z/ryvYlYYXnP3e4U86tpec/A6awdvrF5z+Pkw0fR+bnPxuBaseTBug/pm7Hb+Am6D8yXCQYLUfoP75JgcB5Z+g/SjfeaMaH6D/WJDsRE6joP2ISmLlfyOg/7f/0Yazo6D957VEK+QjpPwXbrrJFKek/kcgLW5JJ6T8dtmgD32npP6mjxasriuk/NZEiVHiq6T/Afn/8xMrpP0xs3KQR6+k/2Fk5TV4L6j9kR5b1qivqP/A08533S+o/fCJQRkRs6j8IEK3ukIzqP5P9CZfdrOo/H+tmPyrN6j+r2MPndu3qPzfGIJDDDes/w7N9OBAu6z9PodrgXE7rP9uON4mpbus/ZnyUMfaO6z/yafHZQq/rP35XToKPz+s/CkWrKtzv6z+WMgjTKBDsPyIgZXt1MOw/IiBle3Uw7D8iIGV7dTDsP5YyCNMoEOw/CkWrKtzv6z9+V06Cj8/rP/Jp8dlCr+s/ZnyUMfaO6z/bjjeJqW7rP0+h2uBcTus/w7N9OBAu6z83xiCQww3rP6vYw+d27eo/H+tmPyrN6j+T/QmX3azqPwgQre6QjOo/fCJQRkRs6j/wNPOd90vqP2RHlvWqK+o/2Fk5TV4L6j9MbNykEevpP8B+f/zEyuk/NZEiVHiq6T+po8WrK4rpPx22aAPfaek/kcgLW5JJ6T8F266yRSnpP3ntUQr5COk/7f/0Yazo6D9iEpi5X8joP9YkOxETqOg/SjfeaMaH6D++SYHAeWfoPzJcJBgtR+g/pm7Hb+Am6D8bgWrHkwboP4+TDR9H5uc/A6awdvrF5z93uFPOraXnP+vK9iVhhec/X92ZfRRl5z/T7zzVx0TnP0gC4Cx7JOc/vBSDhC4E5z8wJybc4ePmP6Q5yTOVw+Y/GExsi0ij5j+MXg/j+4LmPwBxsjqvYuY/dYNVkmJC5j/plfjpFSLmP12om0HJAeY/0bo+mXzh5T9FzeHwL8HlP7nfhEjjoOU/LfInoJaA5T+iBMv3SWDlPxYXbk/9P+U/iikRp7Af5T/+O7T+Y//kP3JOV1YX3+Q/5mD6rcq+5D9bc50Ffp7kP8+FQF0xfuQ/Q5jjtORd5D+3qoYMmD3kPyu9KWRLHeQ/n8/Mu/784z8T4m8TstzjP4j0EmtlvOM//Aa2whic4z/8BrbCGJzjPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[140]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmDKUR2BwvT+YMpRHYHC9P/eB+DUXeL4/aFm7p0YTwD8cP9yk1TbBPyANna5/p8I/92p/oL5LxD/pPB+BLjTGP1y7ceUlUcg/RloeCDeryj9c05k9vkXNPxIJAHYc/c8/Cn1ONIR20T+nfdwfrvbSPzeUMYkwfdQ/9ybOU28P1j/vD3lUFqnXPxLKjhTxQNk/GzTzVLnc2j/bo8im43bcPyNdAgX4E94/NzCtR5y03z9t5bcW/KbgPxxq9U6SeOE/3Qt+h1pE4j+hSgqpBxLjPyu6r2b+4uM/nIWuMi6v5D+x641olXjlPz8JACz1QOY/Kq6YlfAI5z/mdqCjnM7nP9RK3+hxlOg/razKOhBd6T9p0LmgainqP/iPEKFdAOs/hi64EUDg6z//ezNnAcrsP3qTYSNGx+0/kHnd4G7U7j9QoJLqXfXvP3pNSzrvkvA/ZP1D5UA28T9EEk9Ba+DxPwu3r7tMkfI/CQgp1XRH8z+/QOAvivzzPxudkwpGsvQ/ZFgpd4Rn9T+1SEjYzhf2P213Ox0bv/Y/GCK/U2Fg9z8ARti64fX3Pw4QuAcjgPg/qD8GySj/+D8vDynrDXf5PxrDH4s54fk//oaAcM1D+j+S/e4aYZr6P4tEsM6P5/o/CMy0Sl4v+z9BE4YSGGr7P1/Ovz7nofs/OIwnTI7V+z/qNrNCxAH8P4R20LJyKfw/1V9gF7tO/D8kf2egB3L8P+aekrxPlPw/tPdNVQy3/D8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[140]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59426&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59425&quot;}},&quot;id&quot;:&quot;59406&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59414&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59365&quot;}},&quot;id&quot;:&quot;59364&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59401&quot;}},&quot;id&quot;:&quot;59405&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59421&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59423&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59401&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59402&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59403&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59405&quot;}},&quot;id&quot;:&quot;59404&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59425&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59402&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59426&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59391&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59392&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59393&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59395&quot;}},&quot;id&quot;:&quot;59394&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59393&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59416&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59369&quot;}},&quot;id&quot;:&quot;59368&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59378&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59360&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59368&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59371&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59375&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59364&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59367&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59397&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59381&quot;}},&quot;id&quot;:&quot;59376&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59381&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;ty8rHFqpuT8WnBJfv6u6P3UI+qEkrrs/1HTh5ImwvD8y4cgn77K9P5FNsGpUtb4/8LmXrbm3vz8nkz94D13AP1dJsxlC3sA/hv8mu3RfwT+2tZpcp+DBP+VrDv7ZYcI/FCKCnwzjwj9E2PVAP2TDP3OOaeJx5cM/okTdg6RmxD/S+lAl1+fEPwKxxMYJacU/MWc4aDzqxT9gHawJb2vGP5DTH6uh7MY/v4mTTNRtxz/uPwfuBu/HPx72eo85cMg/TqzuMGzxyD98YmLSnnLJP6wY1nPR88k/3M5JFQR1yj8Lhb22NvbKPzo7MVhpd8s/avGk+Zv4yz+ZpxibznnMP8hdjDwB+8w/+BMA3jN8zT8oynN/Zv3NP1aA5yCZfs4/hjZbwsv/zj+27M5j/oDPP3JRoYIYAdA/iixb07FB0D+iBxUkS4LQP7riznTkwtA/0b2IxX0D0T/pmEIWF0TRPwF0/GawhNE/GE+2t0nF0T8wKnAI4wXSP0gFKll8RtI/YODjqRWH0j93u536rsfSP4+WV0tICNM/p3ERnOFI0z++TMvseonTP9YnhT0UytM/7gI/jq0K1D8F3vjeRkvUPx25si/gi9Q/NZRsgHnM1D9NbybREg3VP2RK4CGsTdU/fCWackWO1T+UAFTD3s7VP6vbDRR4D9Y/w7bHZBFQ1j/bkYG1qpDWP/NsOwZE0dY/Ckj1Vt0R1z8iI6+ndlLXPzr+aPgPk9c/UtkiSanT1z9ptNyZQhTYP4GPlurbVNg/gY+W6ttU2D+Bj5bq21TYP2m03JlCFNg/UtkiSanT1z86/mj4D5PXPyIjr6d2Utc/Ckj1Vt0R1z/zbDsGRNHWP9uRgbWqkNY/w7bHZBFQ1j+r2w0UeA/WP5QAVMPeztU/fCWackWO1T9kSuAhrE3VP01vJtESDdU/NZRsgHnM1D8dubIv4IvUPwXe+N5GS9Q/7gI/jq0K1D/WJ4U9FMrTP75My+x6idM/p3ERnOFI0z+PlldLSAjTP3e7nfqux9I/YODjqRWH0j9IBSpZfEbSPzAqcAjjBdI/GE+2t0nF0T8BdPxmsITRP+mYQhYXRNE/0b2IxX0D0T+64s505MLQP6IHFSRLgtA/iixb07FB0D9yUaGCGAHQP7bszmP+gM8/hjZbwsv/zj9WgOcgmX7OPyjKc39m/c0/+BMA3jN8zT/IXYw8AfvMP5mnGJvOecw/avGk+Zv4yz86OzFYaXfLPwuFvbY29so/3M5JFQR1yj+sGNZz0fPJP3xiYtKecsk/TqzuMGzxyD8e9nqPOXDIP+4/B+4G78c/v4mTTNRtxz+Q0x+roezGP2AdrAlva8Y/MWc4aDzqxT8CscTGCWnFP9L6UCXX58Q/okTdg6RmxD9zjmniceXDP0TY9UA/ZMM/FCKCnwzjwj/law7+2WHCP7a1mlyn4ME/hv8mu3RfwT9XSbMZQt7APyeTP3gPXcA/8LmXrbm3vz+RTbBqVLW+PzLhyCfvsr0/1HTh5ImwvD91CPqhJK67PxacEl+/q7o/ty8rHFqpuT+3LyscWqm5Pw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[146]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH6cvLLvy/j8fpy8su/L+P4xHeyz8m/4/oBc6uBdD/j+p6FrLoeT9P4rdcOL5fP0/Q8PjMSQQ/T/tTMeSzpz8P4vTn+2THfw/ICyrG8iZ+z/d7Nw6RBH7P1S0gV4Nhfo/fnP9yRT0+T8fQyqonl75P/Ig5m2my/g/w+Xl0Ic8+D/2mFeO2K33PzqL5ob3Hfc/JNX5P4eP9j/NK/15swH2P9zx99UGd/U/Gl87r3bp9D/GAv74Z130PyuENEbEz/M/jcnk7MpA8z8IENqtnLDyPyHNIkkKIvI/EyW/ONWS8T+rKyPegwXxPwZunK6dePA/uo/KFYTc7z+yzV+4U8LuP3YuCYQutu0/66nnsc2q7D/VHcrMTqHrP3g+4GmWm+o/mt0E7pOT6T98M5ecgI3oP1T0EZYxiOc/CLbxtEyE5j9gdZIskoHlP7xBx0gbf+Q/Nn0srn6A4z9jW1ClKYLiP+eBUI6ohOE/h6pCviKN4D84xvmXm0PfP1QzkIwgbt0/Q5ZO2YKt2z9FoWiHafbZP5K3isu8WNg//P83hmfI1j8Ia3KMc0PVPzZNnvSWydM/eDxZbLZg0j92RHl7mQPRP8yiRiGWds8/oIF9ynr/zD/H9Tr5oKLKP3mxbQ7xUMg/yRxXXpYfxj8MJTWA0BXEP9I74m2uKMI/TlK8rrRdwD/PcNntgVm9P9UQL1ErX7o/qEd2EgXEtz9DScqjpoC1P/vbDD6Mm7M/EQhPm8YZsj/fzvIpBQ6xP8Tka2tMUbA/xaOI1zQcsD8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[146]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59420&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59419&quot;}},&quot;id&quot;:&quot;59391&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59419&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59365&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59406&quot;}},&quot;id&quot;:&quot;59410&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59373&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59372&quot;},{&quot;id&quot;:&quot;59373&quot;},{&quot;id&quot;:&quot;59374&quot;},{&quot;id&quot;:&quot;59375&quot;},{&quot;id&quot;:&quot;59376&quot;},{&quot;id&quot;:&quot;59377&quot;},{&quot;id&quot;:&quot;59378&quot;},{&quot;id&quot;:&quot;59379&quot;}]},&quot;id&quot;:&quot;59382&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;mWpQO3WV2D+wRQqMDtbYP8ggxNynFtk/4Pt9LUFX2T/31jd+2pfZPw+y8c5z2Nk/J42rHw0Z2j8/aGVwplnaP1ZDH8E/mto/bh7ZEdna2j+G+ZJichvbP53UTLMLXNs/ta8GBKWc2z/NisBUPt3bP+RleqXXHdw//EA09nBe3D8UHO5GCp/cPyz3p5ej39w/Q9Jh6Dwg3T9brRs51mDdP3OI1Ylvod0/imOP2gji3T+iPkkroiLeP7oZA3w7Y94/0vS8zNSj3j/pz3YdbuTePwGrMG4HJd8/GYbqvqBl3z8Zhuq+oGXfPxmG6r6gZd8/Aaswbgcl3z/pz3YdbuTeP9L0vMzUo94/uhkDfDtj3j+iPkkroiLeP4pjj9oI4t0/c4jViW+h3T9brRs51mDdP0PSYeg8IN0/LPenl6Pf3D8UHO5GCp/cP/xANPZwXtw/5GV6pdcd3D/NisBUPt3bP7WvBgSlnNs/ndRMswtc2z+G+ZJichvbP24e2RHZ2to/VkMfwT+a2j8/aGVwplnaPyeNqx8NGdo/D7LxznPY2T/31jd+2pfZP+D7fS1BV9k/yCDE3KcW2T+wRQqMDtbYP5lqUDt1ldg/mWpQO3WV2D8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[58]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUObS9kFEEQFQ5tL2QUQRAVAfyCJ5dBEBvFSmUF2IEQFrzuE7iXwRAUcfkPKZUBEDJt5f+OEQEQE5oXMkCLARAMgzluxwOBEDWTE+dhOkDQDykJbbhwANA/TpyVO6RA0AaA72NUV0DQESJXJuEIwNAFmdMM8vlAkCT22ShsKUCQPH8z863YgJAGO+8SOAdAkBfM4UgX9gBQCZDoRWVkgFA2WPbn1pOAUDGQ5fAeQ0BQBC/A62nzgBAaH5RYvmUAECZkVZR3l4AQCzhnxcdKwBApRns4ZD1/z+oSTYwL5z/P+WX2arQRv8/AAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[58]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59422&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59421&quot;}},&quot;id&quot;:&quot;59396&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;59379&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59369&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59377&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59406&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59407&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59408&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59410&quot;}},&quot;id&quot;:&quot;59409&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59392&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59380&quot;}},&quot;id&quot;:&quot;59374&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59403&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59422&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;59382&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;59372&quot;},{&quot;id&quot;:&quot;59373&quot;},{&quot;id&quot;:&quot;59374&quot;},{&quot;id&quot;:&quot;59375&quot;},{&quot;id&quot;:&quot;59376&quot;},{&quot;id&quot;:&quot;59377&quot;},{&quot;id&quot;:&quot;59378&quot;},{&quot;id&quot;:&quot;59379&quot;}]},&quot;id&quot;:&quot;59429&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59364&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59367&quot;},{&quot;id&quot;:&quot;59371&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59368&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59394&quot;},{&quot;id&quot;:&quot;59399&quot;},{&quot;id&quot;:&quot;59404&quot;},{&quot;id&quot;:&quot;59409&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59411&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59382&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;59356&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59360&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59358&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59362&quot;}},&quot;id&quot;:&quot;59355&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59362&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59358&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59420&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59398&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59411&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59396&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59397&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59398&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59400&quot;}},&quot;id&quot;:&quot;59399&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59424&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59416&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59396&quot;}},&quot;id&quot;:&quot;59400&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59407&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59414&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59430&quot;},{&quot;id&quot;:&quot;59428&quot;}]},&quot;id&quot;:&quot;59431&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59372&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59391&quot;}},&quot;id&quot;:&quot;59395&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59356&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;59429&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;59430&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59408&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;59355&quot;},0,0]]},&quot;id&quot;:&quot;59428&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59380&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;MGGkDzqm3z9IPF5g0+bfP7ALjFi2E+A/O/noAAM04D/H5kWpT1TgP1PUolGcdOA/38H/+eiU4D9rr1yiNbXgP/ecuUqC1eA/g4oW88714D8OeHObGxbhP5pl0ENoNuE/JlMt7LRW4T+yQIqUAXfhPz4u5zxOl+E/yhtE5Zq34T9WCaGN59fhP+H2/TU0+OE/beRa3oAY4j/50beGzTjiP4W/FC8aWeI/Ea1x12Z54j+dms5/s5niPyiIKygAuuI/tHWI0Eza4j9AY+V4mfriP8xQQiHmGuM/WD6fyTI74z/kK/xxf1vjP3AZWRrMe+M/cBlZGsx74z9wGVkazHvjP+Qr/HF/W+M/WD6fyTI74z/MUEIh5hrjP0Bj5XiZ+uI/tHWI0Eza4j8oiCsoALriP52azn+zmeI/Ea1x12Z54j+FvxQvGlniP/nRt4bNOOI/beRa3oAY4j/h9v01NPjhP1YJoY3n1+E/yhtE5Zq34T8+Luc8TpfhP7JAipQBd+E/JlMt7LRW4T+aZdBDaDbhPw54c5sbFuE/g4oW88714D/3nLlKgtXgP2uvXKI1teA/38H/+eiU4D9T1KJRnHTgP8fmRalPVOA/O/noAAM04D+wC4xYthPgP0g8XmDT5t8/MGGkDzqm3z8wYaQPOqbfPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[62]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALZQrtxLc/D8tlCu3Etz8P6H27G9gAf0/fgmv/sop/T/EOMahBVj9P0le3+k4i/0/HQsUsk/D/T9cqsjWPAj+P2glP5OcU/4/NkwiW0+o/j9v9eUimwP/P1L4pnhWaf8/46IdwoLW/z8iegCJWiYAQJYENFUJZwBApoMUa/iqAECzUNvi3vAAQPNtPW9UOwFAkgCW04mFAUDcAJY4B9EBQGvFr4r9GgJA+eyonPpkAkCTqpoE5K0CQPSwOGQc9AJADEI0OjM1A0CUPsfYD3ADQKoxpLUWqANAKO5K7wXYA0C8Sc+8zAEEQK965pqCIwRABjWpENk+BEAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[62]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59424&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59423&quot;}},&quot;id&quot;:&quot;59401&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;}],&quot;root_ids&quot;:[&quot;59431&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"8657e30b-2929-4100-bdcf-e8849b48e1f2","root_ids":["59431"],"roots":{"59431":"ec63287c-3231-4d0a-bdec-620600d22142"}}];
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
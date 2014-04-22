(ns futurejs-wall.core
  (:require [monet.canvas :as canvas]))

(enable-console-print!)

(println "Hello world!")

(def window-width (.-innerWidth js/window))
(def window-height (.-innerHeight js/window))

(def canvas-dom (.getElementById js/document "canvas"))

(set! (.-width canvas-dom) window-width)
(set! (.-height canvas-dom) window-height)

(def monet-canvas (canvas/init canvas-dom "2d"))

(canvas/add-entity monet-canvas :background
                   (canvas/entity {:x 0 :y 0 :w window-width :h window-height} ; val
                                  nil                       ; update function
                                  (fn [ctx val]             ; draw function
                                    (-> ctx
                                        (canvas/fill-style "#aaddff")
                                        (canvas/fill-rect val)))))

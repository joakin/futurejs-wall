(ns futurejs-wall.core
  (:require [monet.core :refer [animation-frame]]
            [monet.canvas :as canvas]))

(enable-console-print!)

(println "Hello world!")

;; CANVAS

(def window-width (.-innerWidth js/window))
(def window-height (.-innerHeight js/window))

(def canvas-dom (.getElementById js/document "canvas"))

(set! (.-width canvas-dom) window-width)
(set! (.-height canvas-dom) window-height)

(def mc (canvas/init canvas-dom "2d"))

;; BACKGROUND

(defn draw-background! [ctx v]
  (-> ctx
      (canvas/fill-style "#aaddff")
      (canvas/fill-rect v)))

(canvas/add-entity mc :background
                   (canvas/entity {:x 0 :y 0
                                   :w window-width
                                   :h window-height}
                                  nil
                                  draw-background!))

;; TEXT

(defn draw-text! [ctx v]
  (-> ctx
      (canvas/fill-style "#ffffff")
      (canvas/font-style "bold 72pt Monaco")
      (canvas/text v)))

(canvas/add-entity mc :text
                   (canvas/entity {:text "FutureJS"
                                   :x 40
                                   :y 100}
                                  nil
                                  draw-text!))

;; ANIMATION

(defn animate []
  (canvas/update-entity mc :text
                        #(assoc-in % [:value :text]
                                   (.getSeconds (js/Date.))))
  )

((fn render []
   (animate)
   (animation-frame render)))

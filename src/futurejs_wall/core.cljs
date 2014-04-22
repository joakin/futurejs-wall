(ns futurejs-wall.core
  (:require [monet.core :refer [animation-frame]]
            [monet.canvas :as canvas]
            [futurejs-wall.color :as c]))

(enable-console-print!)

(println "Hello world!")

;; CANVAS

(def window-width (.-innerWidth js/window))
(def window-height (.-innerHeight js/window))

(def canvas-dom (.getElementById js/document "canvas"))

(set! (.-width canvas-dom) window-width)
(set! (.-height canvas-dom) window-height)

(def mc (canvas/init canvas-dom "2d"))

#_(canvas/stop-updating mc)

;; BACKGROUND

(defn draw-background! [ctx v]
  (-> ctx
      (canvas/fill-style (c/color->hex (:color v)))
      (canvas/fill-rect v)))

(defn update-background! [{:keys [color] :as e}]
  (assoc e :color (c/soft-random! color))
  )

(canvas/add-entity mc :background
                   (canvas/entity {:x 0 :y 0
                                   :w window-width
                                   :h window-height
                                   :color [100 200 255]}
                                  update-background!
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

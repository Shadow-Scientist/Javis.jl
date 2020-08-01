var documenterSearchIndex = {"docs":
[{"location":"references/","page":"References","title":"References","text":"CurrentModule = Javis","category":"page"},{"location":"references/#Javis","page":"References","title":"Javis","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/","page":"References","title":"References","text":"Modules = [Javis]","category":"page"},{"location":"references/#Base.:*-Tuple{Array{Float64,2},Transformation}","page":"References","title":"Base.:*","text":"Base.:*(m::Array{Float64,2}, transformation::Transformation)\n\nConvert the transformation to a matrix and multiplies m*trans_matrix. Return a new Transformation\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.compute_transformation!-Tuple{Action,Video,Int64}","page":"References","title":"Javis.compute_transformation!","text":"compute_transformation!(action::Action, video::Video, frame::Int)\n\nUpdate action.internal_transitions for the current frame number\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.compute_transition!-Tuple{Javis.InternalRotation,Rotation,Any,Action,Any}","page":"References","title":"Javis.compute_transition!","text":"compute_transition!(internal_rotation::InternalRotation, rotation::Rotation, video, action::Action, frame)\n\nComputes the rotation transformation for the action. If the Rotation is given directly it uses the frame number for interpolation. If rotation includes symbols the current definition of that look up is used for computation.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.compute_transition!-Tuple{Javis.InternalTranslation,Translation,Any,Action,Any}","page":"References","title":"Javis.compute_transition!","text":"compute_transition!(internal_translation::InternalTranslation, translation::Translation, video, action::Action, frame)\n\nComputes the translation transformation for the action. If the translation is given directly it uses the frame number for interpolation. If translation includes symbols the current definition of that look up is used for computation.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_obj-Tuple{Val{:g},Any,Any}","page":"References","title":"Javis.draw_obj","text":"draw_obj(::Val{:g}, o, defs)\n\nDraws a group by setting the attributes (like transformations)  and then calls draw_obj for all child elements.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_obj-Tuple{Val{:path},Any,Any}","page":"References","title":"Javis.draw_obj","text":"draw_obj(::Val{:path}, o, defs)\n\nCalls the commands specified in the path data.  Currently supports only a subset of possible SVG commands.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_obj-Tuple{Val{:rect},Any,Any}","page":"References","title":"Javis.draw_obj","text":"draw_obj(::Val{:rect}, o, defs)\n\nDraw the rectangle defined by the object o.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.draw_obj-Tuple{Val{:use},Any,Any}","page":"References","title":"Javis.draw_obj","text":"draw_obj(::Val{:use}, o, defs)\n\nCalls the command specified in defs.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.float_attribute-Tuple{LightXML.XMLElement,Any}","page":"References","title":"Javis.float_attribute","text":"float_attribute(o, name)\n\nGet the attribute name of the XMLElement and parse it as a Float64\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.javis-Tuple{Video,Array{Action,1}}","page":"References","title":"Javis.javis","text":"javis(\n    video::Video,\n    actions::Vector{Action};\n    creategif=false,\n    framerate=30,\n    pathname=\"\",\n    tempdirectory=\"\",\n    usenewffmpeg=true\n)\n\nSimilar to animate in Luxor with a slightly different structure. Instead of using actions and a video instead of scenes in a movie.\n\nAn example:\n\nfunction ground(args...) \n    background(\"white\")\n    sethue(\"black\")\nend\n\nfunction circ(p=O, color=\"black\")\n    sethue(color)\n    circle(p, 25, :fill)\n    return Transformation(p, 0.0)\nend\n\nfrom = Point(-200, -200)\nto = Point(-20, -130)\np1 = Point(0,-100)\np2 = Point(0,-50)\nfrom_rot = 0.0\nto_rot = 2π\n\ndemo = Video(500, 500)\njavis(demo, [\n    Action(1:100, ground),\n    Action(1:100, :red_ball, (args...)->circ(p1, \"red\"), Rotation(from_rot, to_rot)),\n    Action(1:100, (args...)->circ(p2, \"blue\"), Rotation(to_rot, from_rot, :red_ball))\n], tempdirectory=\"images\", creategif=true, pathname=\"rotating.gif\")\n\nThis structure makes it possible to refer to positions of previous actions i.e :red_ball is an id for the position or the red ball which can be used in the Rotation of the next ball.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.latex-Tuple{LaTeXStrings.LaTeXString,Real,Symbol}","page":"References","title":"Javis.latex","text":"latex(text::LaTeXString, font_size::Real, action::Symbol)\n\nAdd the latex string text to the top left corner of the LaTeX path. Can be added to Luxor.jl graphics such as Video or Drawing.\n\nNOTE: This only works if tex2svg is installed. It can be installed using the following command (you may have to prefix this command with sudo depending on your installation):\n\nnpm install -g mathjax-node-cli\n\nArguments\n\ntext::LaTeXString: a LaTeX string to render.\nfont_size::Real: integer font size of LaTeX string. Default 10.\naction::Symbol: graphics actions defined by Luxor.jl. Default :stroke. Available actions:\n:fill - See Luxor.fillpath.\n:stroke - See Luxor.strokepath.\n:clip - See Luxor.clip.\n:fillstroke - See Luxor.fillstroke.\n:fillpreserve - See Luxor.fillpreserve.\n:strokepreserve - See Luxor.strokepreserve.\n:none - Does nothing.\n:path - See Luxor docs for polygons.md\n\nThrows\n\nIOError: mathjax-node-cli is not installed\n\nExample\n\nusing Luxor\nusing Javis\nusing LaTeXStrings\n\nmy_drawing = Drawing(400, 200, \"test.png\")\nbackground(\"white\")\nsethue(\"black\")\nlatex(L\"\\sum \\phi\", 100)\nfinish()\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.path_move-Tuple{Any,Any}","page":"References","title":"Javis.path_move","text":"path_move(x,y)\n\nMoving to the specified point\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.path_quadratic-Tuple{Luxor.Point,Any,Any,Any,Any}","page":"References","title":"Javis.path_quadratic","text":"path_quadratic(c_pt::Point, x,y, xe, ye)\n\nDrawing a quadratic bezier curve by computing a cubic one as that is supported by Luxor\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.pathsvg","page":"References","title":"Javis.pathsvg","text":"pathsvg(svg, fontsize=10)\n\nConvert an svg to a path using Luxor. Normally called via the latex command. It handles only a subset of the full power of svg.\n\n\n\n\n\n","category":"function"},{"location":"references/#Javis.perform_transformation-Tuple{Action}","page":"References","title":"Javis.perform_transformation","text":"perform_transformation(action::Action)\n\nPerform the transformations as described in action.internal_transitions\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.perform_transformation-Tuple{Javis.InternalRotation}","page":"References","title":"Javis.perform_transformation","text":"perform_transformation(trans::InternalRotation)\n\nTranslate and rotate as described in trans.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.perform_transformation-Tuple{Javis.InternalTranslation}","page":"References","title":"Javis.perform_transformation","text":"perform_transformation(trans::InternalTranslation)\n\nTranslate as described in trans.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.projection-Tuple{Luxor.Point,Line}","page":"References","title":"Javis.projection","text":"projection(p::Point, l::Line)\n\nReturn the projection of a point to a line.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.set_attr-Tuple{Val{:transform},Any}","page":"References","title":"Javis.set_attr","text":"set_attr(::Val{:transform}, transform_str)\n\nCall the corresponding set_transform method i.e matrix, scale and translate\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.set_attrs-Tuple{Any}","page":"References","title":"Javis.set_attrs","text":"set_attrs(o)\n\nSetting the attributes of the object o by calling set_attr methods.\n\n\n\n\n\n","category":"method"},{"location":"references/#Javis.set_transform-Tuple{Val{:matrix},Vararg{Any,N} where N}","page":"References","title":"Javis.set_transform","text":"set_transform(::Val{:matrix}, args...)\n\nMultiply the new matrix with the current matrix and set it.\n\n\n\n\n\n","category":"method"},{"location":"#Javis","page":"Home","title":"Javis","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Javis.jl (Julia mAthematical VISualization) is a visualization and animation package that builds on top of Luxor.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"The overall goal is to make it simple to create mathematical animations. ","category":"page"}]
}

package portfolio

import com.raquo.laminar.api.L.{*, given}
import scala.scalajs.js
import scala.scalajs.js.annotation.*

import org.scalajs.dom

// import javascriptLogo from "/javascript.svg"
@js.native @JSImport("/javascript.svg", JSImport.Default)
val javascriptLogo: String = js.native

@main
def Portfolio(): Unit =
  renderOnDomContentLoaded(
    dom.document.getElementById("app"),
    Main.appElement()
  )

object Main:
  def appElement(): Element =
    div(
      a(href := "https://vitejs.dev", target := "_blank",
        img(src := "/vite.svg", className := "logo", alt := "Vite logo"),
      ),
      a(href := "https://developer.mozilla.org/en-US/docs/Web/JavaScript", target := "_blank",
        img(src := javascriptLogo, className := "logo vanilla", alt := "JavaScript logo"),
      ),
      h1("Hello Laminar!"),
      div(className := "card",
        button(tpe := "button"),
      ),
      p(className := "read-the-docs",
        "Click on the Vite logo to learn more",
      ),
      mainContent(),
    )
  end appElement
end Main

def counterButton(): Element =
    val counter = Var(0)
    button(
        tpe := "button",
        "count is ",
        child.text <-- counter,
        onClick --> { event => counter.update(c => c + 1) },
    )
end counterButton

def pretext(): Element =
    div (
        "メニューをクリックしてください",
    )
end pretext

def introduce(): Element = 
    div(
        "音無 仮我(オトナキ ケワ)。本名は大脇 謙太。1992年生まれ。岐阜県出身。",
    )
end introduce

def mainContent(): Element =
    val content: Var[Element] = Var(
        pretext()
    )

    div(
        div(
            child <-- content,
        ),
        div(
            button(
                "click me",
                onClick --> {event => content.update(c => introduce()) },
            ),
            button(
                "reset",
                onClick --> {event => content.update(c => pretext())},
            )
        ),
    )

end mainContent
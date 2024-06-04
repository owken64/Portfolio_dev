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
/*
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
*/

object Main:
  def appElement(): Element =
    mainContent()
  end appElement
end Main

def strPretext(): String = "Top"

def strIntroduce(): String = "自己紹介"

def strWorks(): String = "ワークス"

def strReadBooks(): String = "読んだ本"

def strContact(): String = "コンタクト"

def pretext(): Element =
    div(
        h1 (
            "Studio Silence",
        ),
        h2(
            "音無のページ"
        )
    )
end pretext

def introduce(): Element = 
    div(
        p(
            "音無(オトナキ)。1992年生まれ。岐阜県出身。",
        )
    )
end introduce

def works(): Element = 
    div(
        div("自作アンプ(予定)"),
        div("自作エフェクター(予定)"),
        div("自作シンセサイザー(予定)"),
        div("本(予定)")
    )
end works

def readBooks(): Element = BookListFetch()

def contact(): Element =
    div(
        div(
            "owken64 [at] gmail.com"
        ),
        div(
            "[at] を @ に変えてください。"
        ),
        div(
            "X(旧Twitter)"
        ),
        div(
            "@OtonakiKewa"
        )
    )
end contact


def mainContent(): Element =
    val content: Var[Element] = Var(
        pretext()
    )

    def menu(): Element = 
        div(
            //p("Menu"),
            div(
                div(button(
                    strPretext(),
                    onClick --> {event => content.update(c => pretext())},
                )),
                div(button(
                    strIntroduce(),
                    onClick --> {event => content.update(c => introduce()) },
                )),
                div(button(
                    strWorks(),
                    onClick --> {event => content.update(c => works()) },
                )),
                div(button(
                    strReadBooks(),
                    onClick --> {event => content.update(c => readBooks()) },
                )),
                div(button(
                    strContact(),
                    onClick --> {event => content.update(c => contact()) },
                )),
            ),
        )
    end menu

    div(
        div(
            child <-- content,
            className := "left-content",
        ),
        div(
            menu(),
            className := "right-content",
        ),
    )
end mainContent
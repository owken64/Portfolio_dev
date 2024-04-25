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

def strInstruments(): String = "機材紹介"

def strReadBooks(): String = "読んだ本"

def strContact(): String = "コンタクト"

def pretext(): Element =
    div(
        h1 (
            "Kenta Owaki",
        ),
        h2(
            "大脇 謙太のページ"
        )
    )
end pretext

def introduce(): Element = 
    div(
        p(
            "大脇 謙太(おおわき けんた)。1992年生まれ。岐阜県出身。",
        )
    )
end introduce

def instruments(): Element =
    div(
        "Epiphone Casino",
    )
end instruments

def readBooks(): Element =
    val bookVar: Var[List[MyBook]] = Var(readReadBooks().map( csv2book(_) ))
    val bookSignal = bookVar.signal
    table(
        tbody(
            children <-- bookSignal.map(booklist => booklist.map{ item => 
                book2Elem( item )
            }),
        )
    )
end readBooks

def Iter2List[T](iter: Iterator[T]): List[T] = 
    var ret: List[T] = Nil

    for(line <- iter) {
        ret = line :: ret
    }
    ret.reverse
end Iter2List

def Array2List[T](ary: Array[T]): List[T] = 
    var ret: List[T] = Nil

    for(line <- ary) {
        ret = line :: ret
    }
    ret.reverse
end Array2List

def readReadBooks(): List[String] =
//    val filename: String = "books_I_read.csv"
//    Iter2List( Source.fromFile(filename).getLines() )
    Array2List( ReadBookStr.split("\n") )
end readReadBooks

case class MyBook(date: String, title: String, author: String, shoten: String)

def csv2book(in: String): MyBook = {
    val delm: String = ","
    val ary = in.split(delm).toArray
    MyBook(ary(0), ary(1), ary(2), ary(3))
}

def book2Elem(item: MyBook):Element = 
    tr(
        td(item.date),
        td(item.title),
        td(item.author),
        td(item.shoten),
    )
end book2Elem

def contact(): Element =
    div(
        div(
            "owken64 [at] gmail.com"
        ),
        div(
            "[at] を @ に変えてください。"
        )
    )
end contact



def mainContent(): Element =
    val content: Var[Element] = Var(
        pretext()
    )

    def menu(): Element = 
        div(
            p("Menu"),
            div(
                button(
                    strPretext(),
                    onClick --> {event => content.update(c => pretext())},
                ),
                button(
                    strIntroduce(),
                    onClick --> {event => content.update(c => introduce()) },
                ),
                button(
                    strInstruments(),
                    onClick --> {event => content.update(c => instruments()) },
                ),
                button(
                    strReadBooks(),
                    onClick --> {event => content.update(c => readBooks()) },
                ),
                button(
                    strContact(),
                    onClick --> {event => content.update(c => contact()) },
                ),
            ),
        )
    end menu

    div(
        div(
            child <-- content,
        ),
        menu(),
    )
end mainContent
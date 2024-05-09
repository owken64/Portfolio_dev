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

def strInstruments(): String = "機材紹介"

def strYoutube(): String = "YouTube"

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

def works(): Element = 
    div(
        div(
            "プリンキピア・マテマティカの和訳"
        ),
        div(
            "底本はこちら",
            a(
                href:= "https://www.amazon.co.jp/Principia-Mathematica-Alfred-North-Whitehead/dp/1603861823/ref=sr_1_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3LC8RRSG01KVL&dib=eyJ2IjoiMSJ9.IVlG5tiAffVxLrowelqf0sy9luAPou5bm-RLFb66FlZNtPmDX4I4Dk3H7nhz3zmkw6scU484pkZHm1xLs7dUNJFygKeSnCutTKuIlRzYTafsNBvZlnHOmGf4aM_4NkRlTpIVsBMIokX-jY6bDVtELB3Vi0thmADauGn3y6B4Z1Ccap-JYcO68hKqSipFln4CYpX3lSwdWGtr_G_WXRPhS101uMgo1v9LMD1BYnE0RKs.VRrlEF4Q3ObneAuhW-VVm8v-gcRWlFcJmwvfvwH4zOo&dib_tag=se&keywords=principia+mathematica&qid=1715000925&s=english-books&sprefix=principia+mathematica%2Cenglish-books%2C205&sr=1-2",
                "Volume one",
            ), ",",
            a(
                href:= "https://www.amazon.co.jp/Principia-Mathematica-Alfred-North-Whitehead/dp/1603861831/ref=pd_sim_d_sccl_2_1/357-1615376-2546052?pd_rd_w=JWLae&content-id=amzn1.sym.3b32c2f6-e6f7-43e2-ac40-fd65e56b52d8&pf_rd_p=3b32c2f6-e6f7-43e2-ac40-fd65e56b52d8&pf_rd_r=9W6Y81H481Z8XWZAWNCZ&pd_rd_wg=J8O5E&pd_rd_r=ee04ba23-7bad-47fe-8b52-be5153d1ed8d&pd_rd_i=1603861831&psc=1",
                "Volume two",
            ), "," ,
            a(
                href:= "https://www.amazon.co.jp/Principia-Mathematica-Three-Alfred-Whitehead/dp/160386184X/ref=pd_sim_d_sccl_2_2/357-1615376-2546052?pd_rd_w=JWLae&content-id=amzn1.sym.3b32c2f6-e6f7-43e2-ac40-fd65e56b52d8&pf_rd_p=3b32c2f6-e6f7-43e2-ac40-fd65e56b52d8&pf_rd_r=9W6Y81H481Z8XWZAWNCZ&pd_rd_wg=J8O5E&pd_rd_r=ee04ba23-7bad-47fe-8b52-be5153d1ed8d&pd_rd_i=160386184X&psc=1",
                "Volume three",
            ),
        ),
        div(
            p("本の概要"),
            p("""プリンキピア・マテマティカは1910年-1913年に初版が出版された。
            プリンキピアは長い間世紀のitellectual landmarkの一つとして認識されていた。
            それは数学と形式論理学の間の近い関係をはっきりと示した初めての本でした。
            最小の数の公理からはじめて、ホワイトヘッドとラッセルは両方の数々の考えの構造を示しています。
            数学の哲学のsubsequentな歴史においてこれほどの影響を持っている本はほかにありません。""")
        )
    )
end works

def instruments(): Element =
    div(
        div("Epiphone Casino"),
        div("Busker's Les Paul Custom"),
        div("Roland Cube 20X"),
        div("Vox AC4TV"),
        div("Vox AC4C1 Mini"),

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
    val filename: String = "books_I_read.csv"
//    Iter2List( Source.fromFile(filename).getLines() )
//    List( js.Dynamic.global.require("fs").readFileSync(filename).toString )
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
//                div(button(
//                    strInstruments(),
//                    onClick --> {event => content.update(c => instruments()) },
//                )),
//                div(button(
//                    strReadBooks(),
//                    onClick --> {event => content.update(c => readBooks()) },
//                )),
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
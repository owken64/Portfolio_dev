package portfolio

import com.raquo.laminar.api.L.{*, given}
import com.raquo.laminar.api.features.unitArrows
import scala.scalajs.js
import scala.scalajs.js.annotation.*

import org.scalajs.dom

object BookListFetch {

  // Example based on plain JS version: http://plnkr.co/edit/ycQbBr0vr7ceUP2p6PHy?preview

  case class FetchOption(name: String, baseUrl: String, bustCache: Boolean = false) {
    def id: String = "fetch-" + name
    def url: String = if (bustCache) baseUrl + "?t=" + js.Date.now() else baseUrl
  }

  private val options = List(
    FetchOption("読んだ本", "books_I_read.csv"),
  )

  def apply(): HtmlElement = {
    val selectedOptionVar = Var(options.head)
    val eventsVar = Var(List.empty[String])

    // Fetch APIを使ってデータを取得するEventStreamを定義
    val response: EventStream[String] = FetchStream.get(url = options.head.url)
//    EventStream.fromJsPromise {
//      dom.fetch(options.head.url) // 実際のAPIエンドポイントに置き換えてください
//    }
    // HTML要素を作成し、eventsVarの値をバインド
    val appElement = div(
      h1("読んだ本"),
      div(
        inContext { thisNode =>
            response --> eventsVar.updater[String](_ :+ _)
        },
        children <-- eventsVar.signal.map { responses => 
            responses.flatMap( response => 
                str2MultiLine( response ).toList.map( line => 
                  csv2ReadBookItem(parseCsv(line)).toHTMLElement
                  )
            )
        }
      )
    )
    appElement
  }
}

case class ReadBookItem(date:String, title:String, author:String, publisher:String) {
    def toHTMLElement = div(
      cls:= "read-book-item", 
      div(date,
        cls:="read-book-item-date"),
      div(title,
        cls:="read-book-item-title"),
      div(author,
        cls:="read-book-item-author"),
      div(publisher,
        cls:="read-book-item-publisher")
    )
}

def str2MultiLine(src: String): Array[String] = src.split('\n')

def parseCsv(src:String): Array[String] = src.split(',')

def csv2ReadBookItem(csv:Array[String]): ReadBookItem = ReadBookItem( csv(0), csv(1), csv(2), csv(3) )

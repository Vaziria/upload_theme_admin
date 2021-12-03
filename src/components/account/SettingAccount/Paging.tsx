import React from 'react'
import { AccountPaging, AccountQuery } from '../../../api/account'

interface IProps {
    query: AccountQuery
    paging: AccountPaging
    update (page:number): void
}

class Paging extends React.Component<IProps> {
    get currentPage (): number {
        const { start, limit } = this.props.query
        const page = (start + limit) / limit
        return Math.ceil(page)
    }

    get lastPage (): number {
        const { paging, query } = this.props
        return Math.ceil(paging.total / query.limit)
    }

    pageAction (page:number): void {
        const { limit } = this.props.query
        page = page > 0 ? page : 1
        const start = (page * limit) - limit

        this.props.update(start)
    }

    renderItem (page: number, text=''): JSX.Element {
        const pagetext = text || page

        return <li key={pagetext} className='page-item'>
          <a className="page-link" onClick={() => this.pageAction(page)}>
            {pagetext}
          </a>
        </li>
      }

    renderCurrentPage (): JSX.Element {
        if (this.lastPage === 0) {
            return <li className="page-item">
                <a className="page-link">....</a>
            </li>
        }

        return <li className="page-item active">
            <a className="page-link">{this.currentPage}</a>
        </li>
    }

    renderBeforePage (): JSX.Element[] {
        const beforePage:JSX.Element[] = []

        if (this.currentPage > 1) {
            if (this.currentPage < 5) {
              for(let i = 1; i < this.currentPage; i++) {
                beforePage.push(this.renderItem(i))
              }
            } else {
                beforePage.push(
                    this.renderItem(1),
                    this.renderItem(this.currentPage - 5, '...'),
                    this.renderItem(this.currentPage - 2),
                    this.renderItem(this.currentPage - 1)
              )
            }
        }
    
        return beforePage
    }

    renderAfterPages (): JSX.Element[] {
        const afterPages: JSX.Element[] = []
        
        if (this.lastPage > this.currentPage) {
          if (this.lastPage - this.currentPage < 4) {
            for(let i = this.currentPage + 1; i <= this.lastPage; i++) {
              afterPages.push(
                this.renderItem(i)
              )
            }
          } else {
            afterPages.push(
              this.renderItem(this.currentPage + 1),
              this.renderItem(this.currentPage + 2),
              this.renderItem(this.currentPage + 7, '...'),
              this.renderItem(this.lastPage)
            )
          }
        }
    
        return afterPages
    }

    render (): JSX.Element {
        
        return <div className="cols">
            <nav aria-label="...">
                <ul className="pagination pagination-sm float-right" style={{ marginTop: 36 }}>
                    {this.renderBeforePage()}
                    {this.renderCurrentPage()}
                    {this.renderAfterPages()}
                    <li className="page-item">
                        <a className="page-link">Jumlah Page : {this.lastPage}</a>
                    </li>
                </ul>
            </nav>
        </div>
    }
}

export default Paging

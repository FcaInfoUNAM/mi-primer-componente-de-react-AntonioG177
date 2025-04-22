export function Grid({items}){
    return <nav className="grid">
          {items.map(e => <a className="nav-item" href={e.ref}>{e.title}</a>)}
      </nav>
}
type PropsLayout = {
    children : React.ReactNode,
    sidebar : React.ReactNode
}

export default function NotesLayout ({children, sidebar}: PropsLayout){
    return (
         <section>
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </section>
    )
}
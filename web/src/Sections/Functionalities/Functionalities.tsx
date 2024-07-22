import { CardList } from '@/components/CardList/CardList'
import BlackBelt from '@/components/BlackBelt/BlackBelt'
import './Functionalities.scss'

export function Functionalities() {
  return (
    <section className="functionalities">
      <BlackBelt
        title="To-do List"
        description="Drag and drop to set your main priorities, check when done and create what´s new."
      />
      <div className="functionalities__container">
        <CardList
          title='To-do'
          description='Take a breath. Start doing.'
          titleLink='Verify all'
          hrefLink='/'
          items={['this is a new task', 'Develop the To-do list page', 'Create the drag-and-drop function', 'Add new tasks', 'Delete itens', 'Erase all', 'Checked item goes to Done list', 'This item label may be edited']}
        />
        <CardList
          title='Done'
          description='Congratulions!'
          description_2='You have done 5 tasks'
          items={['Get FTP credentials', 'Home Page Design', 'E-mail John about the deadline', 'Create a Google Drive folder', 'Send a gift to the client']}
          variants='secondary'
          titleLink='Verify now'
          hrefLink='/'
        />
      </div>
    </section>
  )
}

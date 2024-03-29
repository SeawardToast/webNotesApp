mport notebook from '../controllers/notebookController';

export default (app) => {
    app.route('/notes')
	.get(notebook.getAllNotes)
	.post(notebook.createNote);

    app.route('/notes/:noteID')
	.get(notebook.getNote)
	.put(notebook.updateNote)
	.delete(notebook.deleteNote);
};

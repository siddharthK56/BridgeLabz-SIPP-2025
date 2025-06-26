class NotesController {
    constructor(NoteModel) {
        this.NoteModel = NoteModel;
    }

    async createNote(req, res) {
        try {
            const note = new this.NoteModel(req.body);
            await note.save();
            res.status(201).json(note);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getNotes(req, res) {
        try {
            const notes = await this.NoteModel.find();
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getNoteById(req, res) {
        try {
            const note = await this.NoteModel.findById(req.params.id);
            if (!note) {
                return res.status(404).json({ message: 'Note not found' });
            }
            res.status(200).json(note);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateNote(req, res) {
        try {
            const note = await this.NoteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!note) {
                return res.status(404).json({ message: 'Note not found' });
            }
            res.status(200).json(note);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteNote(req, res) {
        try {
            const note = await this.NoteModel.findByIdAndDelete(req.params.id);
            if (!note) {
                return res.status(404).json({ message: 'Note not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default NotesController;
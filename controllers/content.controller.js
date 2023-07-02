
const Content = require("../models/content.model");
exports.getContents = async (req, res) => {
  const { perPage, page, isSeries } = req.query;

  // Set default values for pagination
  const perPageValue = parseInt(perPage) || 10;
  const pageNumber = parseInt(page) || 1;

  try {
    let query = {};

    // Apply filters based on series or movies
    if (isSeries === 'true') {
      query.isSeries = true;
    } else if (isSeries === 'false') {
      query.isSeries = false;
    }

    const totalCount = await Content.countDocuments(query);
    const totalPages = Math.ceil(totalCount / perPageValue);

    const contents = await Content.find(query)
      .skip((pageNumber - 1) * perPageValue)
      .limit(perPageValue);

    res.status(200).json({
      contents,
      currentPage: pageNumber,
      totalPages,
      totalCount
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving contents', error });
  }
};
exports.getContentById = async (req, res) => {
  try {
    const { id } = req.params;

    const content = await Content.findById(id);

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving content', error });
  }
};
exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContent = await Content.findByIdAndRemove(id);

    if (!deletedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.status(200).json({ message: 'Content deleted', deletedContent });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting content', error });
  }
};
exports.createContent = async (req, res) => {
  try {
    const { title, poster, tags, year, isSeries, seasonCount, seasons, avgEpisodeTime } = req.body;

    const newContent = new Content({
      title,
      poster,
      tags,
      year,
      isSeries,
      seasonCount,
      seasons,
      avgEpisodeTime
    });

    const savedContent = await newContent.save();

    res.status(201).json(savedContent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating content', error });
  }
};
exports.updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, poster, tags, year, isSeries, seasonCount, seasons, avgEpisodeTime } = req.body;

    const updatedContent = await Content.findByIdAndUpdate(id, {
      title,
      poster,
      tags,
      year,
      isSeries,
      seasonCount,
      seasons,
      avgEpisodeTime
    }, { new: true });

    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating content', error });
  }
};



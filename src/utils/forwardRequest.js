const axios = require('axios');

module.exports = async (serviceUrl, req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${serviceUrl}${req.path}`,
      data: req.body,
      headers: {
        Authorization: req.headers.authorization,
        ...req.headers
      },
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json({ message: 'Erro na comunicação com o serviço' });
    }
  }
};

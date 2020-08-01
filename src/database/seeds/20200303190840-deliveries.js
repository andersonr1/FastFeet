module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      { tableName: 'deliveries', model: 'Delivery' },
      [
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Violão',
          status: 'pendente',
          have_problem: false,
          start_date: null,
          end_date: null,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 2,
          deliveryman_id: 2,
          product: 'Computador',
          status: 'pendente',
          have_problem: true,
          start_date: null,
          end_date: null,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 3,
          deliveryman_id: 3,
          product: 'Teclado',
          status: 'retirada',
          have_problem: false,
          start_date: new Date(),
          end_date: null,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 4,
          deliveryman_id: 4,
          product: 'Celular',
          status: 'retirada',
          have_problem: true,
          start_date: new Date(),
          end_date: null,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 5,
          deliveryman_id: 5,
          signature_id: 3,
          product: 'Livros',
          status: 'entregue',
          have_problem: false,
          start_date: new Date(),
          end_date: new Date(),
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 6,
          deliveryman_id: 6,
          signature_id: 3,
          product: 'Mochila',
          have_problem: false,
          status: 'entregue',
          start_date: new Date(),
          end_date: new Date(),
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 7,
          deliveryman_id: 7,
          product: 'Quadros',
          status: 'cancelada',
          have_problem: true,
          start_date: new Date(),
          end_date: null,
          canceled_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 8,
          deliveryman_id: 8,
          product: 'Tapete',
          status: 'cancelada',
          have_problem: true,
          start_date: new Date(),
          end_date: null,
          canceled_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
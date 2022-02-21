const assert = require('assert');
const m=require('../lib/utils.js');

describe
('Test du fichier utils', function()
    {
    // le fichier utils contient la fonction winner
    describe
    ('test de winner', function()
        {
            // vérification avec le module assert
            it('should return true when …',
            function() {assert.equal(0, m.winner("pierre","pierre"));});
            it('should return true when …',
            function() {assert.equal(2, m.winner("pierre","feuille"));});
            it('should return true when …',
            function() {assert.equal(1, m.winner("pierre","ciseaux"));});

            it('should return false when …',
            function() {assert.equal(1, m.winner("pierre","pierre"));});
            it('should return false when …',
            function() {assert.equal(0, m.winner("pierre","feuille"));});
            it('should return false when …',
            function() {assert.equal(2, m.winner("pierre","ciseaux"));});

            it('should return false when …',
            function() {assert.equal(2, m.winner("pierre","pierre"));});
            it('should return false when …',
            function() {assert.equal(1, m.winner("pierre","feuille"));});
            it('should return false when …',
            function() {assert.equal(0, m.winner("pierre","ciseaux"));});



            it('should return true when …',
            function() {assert.equal(1, m.winner("feuille","pierre"));});
            it('should return true when …',
            function() {assert.equal(0, m.winner("feuille","feuille"));});
            it('should return true when …',
            function() {assert.equal(2, m.winner("feuille","ciseaux"));});

            it('should return false when …',
            function() {assert.equal(2, m.winner("feuille","pierre"));});
            it('should return false when …',
            function() {assert.equal(1, m.winner("feuille","feuille"));});
            it('should return false when …',
            function() {assert.equal(0, m.winner("feuille","ciseaux"));});

            it('should return false when …',
            function() {assert.equal(0, m.winner("feuille","pierre"));});
            it('should return false when …',
            function() {assert.equal(2, m.winner("feuille","feuille"));});
            it('should return false when …',
            function() {assert.equal(1, m.winner("feuille","ciseaux"));});



            it('should return true when …',
            function() {assert.equal(2, m.winner("ciseaux","pierre"));});
            it('should return true when …',
            function() {assert.equal(1, m.winner("ciseaux","feuille"));});
            it('should return true when …',
            function() {assert.equal(0, m.winner("ciseaux","ciseaux"));});

            it('should return false when …',
            function() {assert.equal(0, m.winner("ciseaux","pierre"));});
            it('should return false when …',
            function() {assert.equal(2, m.winner("ciseaux","feuille"));});
            it('should return false when …',
            function() {assert.equal(1, m.winner("ciseaux","ciseaux"));});

            it('should return false when …',
            function() {assert.equal(1, m.winner("ciseaux","pierre"));});
            it('should return false when …',
            function() {assert.equal(0, m.winner("ciseaux","feuille"));});
            it('should return false when …',
            function() {assert.equal(2, m.winner("ciseaux","ciseaux"));});
        }
    );
    }
);
const assert = require('assert');
const m=require('../lib/utils.js');

describe
('Test du fichier utils', function()
    {
    // le fichier utils contient la fonction estPlusPetit
    describe
    ('test de estPlusPetit', function()
        {
            // vérification avec le module assert
            it('should return true when …',
            function() {assert.equal('-', m.estPlusPetit(2,5));});
            it('should return false when …',
            function() {assert.equal('-', m.estPlusPetit(5,2));});
            it('should return false when …',
            function() {assert.equal('-', m.estPlusPetit(2,2));});
            

            it('should return true when …',
            function() {assert.equal('+', m.estPlusPetit(5,2));});
            it('should return false when …',
            function() {assert.equal('+', m.estPlusPetit(2,5));});
            it('should return false when …',
            function() {assert.equal('+', m.estPlusPetit(2,2));});

            it('should return true when …',
            function() {assert.equal('=', m.estPlusPetit(2,2));});
            it('should return false when …',
            function() {assert.equal('=', estPlusPetit(2,5));});
            it('should return false when …',
            function() {assert.equal('=', estPlusPetit(5,2));});
        }
    );
    }
);